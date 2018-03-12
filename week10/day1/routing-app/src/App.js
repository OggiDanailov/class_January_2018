import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// we import 3 differnt components here
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios';
import Home from './Home'
import About from './About'
import Destinations from './Destinations'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter> 
        <div>  
           <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/destinations'>Destinations</Link></li>
          </ul> 

            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/destinations' component={Destinations} />
         
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
