import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";


const App =() =>{
    return (
        <>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
        </Switch>
        <footer>
            <p> Copyrght &copy; 2021 Crazy offers All Right Reserved</p>
        </footer>
        </>
        
       
        
    )
};

export default App;