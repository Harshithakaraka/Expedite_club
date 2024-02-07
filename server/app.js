const dotenv = require("dotenv");
const  bcryptjs  = require("bcryptjs");
const  express  = require("express");
const  jwt  = require("jsonwebtoken");
const  cookieParser  = require("cookie-parser");

const app=express();

//Configure ENV File & require Connection File
dotenv.config({path : './config.env'});
require('./db/connn');
const port = process.env.PORT;

//Require Model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema' );
//These methods are used to get data from fronten and cookies
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.get('/',(req, res)=>{
    res.send("Hello World");
})
//Registration
app.post('/register',async (req,res)=>{
    try {
        //Get Body Or Data
        const username = req.body.username;
        const id = req.body.id;
        const domain = req.body.domain;
        const email=req.body.email;
        const password=req.body.password;

        const createUser = new Users({
            username : username,
            id : id,
            domain : domain,
            email : email,
            password : password,
        });
        //Save Method is used to create user or insert user
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");
    } catch (error) {
        res.status(400).send(error);
    }
})
//Login User
app.post('/login', async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        //Find user if exist
        const user = await Users.findOne({email : email});
        if(user)
        {
            const isMatch = await bcryptjs.compare(password,user.password);
            if(isMatch){
                //Generate Token which is define in user schema 
                const token = await user.generateToken();
                res.cookie("jwt",token, {
                    //Expires Token in 24 Hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }
            else{
                res.status(400).send("Invalid Credentials")
            }
        }
        else{
            res.status(400).send("Invalid Credentials")
        }
    } catch (error) {
        res.status(400).send(error);
    }
})
//Message
app.post('/message',async (req,res)=>{
    try {
        //Get Body Or Data
        const name = req.body.name;
        const id = req.body.id;
        const email=req.body.email;
        const message=req.body.message;

        const sendMsg = new Message({
            name : name,
            email : email,
            message : message,
        });
        //Save Method is used to create user or insert user
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("sent");
    } catch (error) {
        res.status(400).send(error);
    }
})
//Run Server
app.listen(port, ()=>{
    console.log("Server Is Listening")
})

//Our Backend
