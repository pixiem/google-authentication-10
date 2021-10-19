import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom'
import React from "react";
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Services from './components/services/Services';
import { Navbar } from 'react-bootstrap';
import Notfound from './components/notFound/Notfound';
import Aboutme from './components/aboutme/Aboutme';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';


function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <Switch>
     <Route exact path="/home" >
       <Home></Home>
     </Route>
     <Route exact path="/" >
       <Home></Home>
     </Route>
     <Route exact path="/services" >
       <Services></Services>
     </Route>
     <Route exact path="/about">
       <Aboutme></Aboutme>
    </Route>
     <Route exact path="/login">
       <Login></Login>
    </Route>
     <Route exact path="/contact">
       <Contact></Contact>
    </Route>
     <Route  path="*">
       <Notfound></Notfound>
    </Route>
    
   </Switch>
   </BrowserRouter>
      
    </div>
  );
}

export default App;
