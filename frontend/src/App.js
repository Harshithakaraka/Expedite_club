import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import About1 from './components/About1';
import TechnicalDomains from './components/TechnicalDomains';
import Nontechnicaldomains from './components/Nontechnicaldomains';
import Sessions from './components/Sessions';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path='/aboutus' element={<About1/>}/>
          <Route exact path='/techdomains' element={<TechnicalDomains/>}/>
          <Route exact path='/nontechdomains' element={<Nontechnicaldomains/>}/>
          <Route exact path='/sessions' element={<Sessions/>}/>
          {/* Add more routes as needed */}
        </Routes>
       
        <Footer />
        
      </div>
      </Router>
    
  );
}

export default App;
