import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home';
import Navbar from '../src/components/navbar';
import Particles from 'react-particles-js';



const particleOpt = {
    particles:{
      number:{
          value:260,
          density:{
            enable:true,
            value_area:900
          }
      }
  }
}

function App() {
  return (
    <Router>
    <div className="background">
      <Navbar></Navbar>
      <Route exact path='/' component={Home}></Route>
    </div>
  </Router>
  );
}

export default App;
