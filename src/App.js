import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Games from "./componets/Games"
import {Route, Switch, Link} from "react-router-dom"
import Home from "./componets/Home"
import Deal from "./componets/Deal"
import Navbar from "./componets/Navbar"
import Axios from "axios"


class App extends Component {
  state = {
    stores: []
  }
  componentDidMount(){
    console.log(this)
    Axios.get("https://www.cheapshark.com/api/1.0/stores").then(res => {
    this.setState({
      stores: res.data
    })
  })}
  render() {
    return (
      <div className="App">
      
      <Navbar/>

       <Switch>
       <Route
              exact
              path="/Games"
              render={props => (
                <Games {...props}  />
              )}
              />
        <Route
              exact
              path="/"
              render={props => (
                <Home {...props}  />
              )}
              />
               <Route
              exact
              path="/deal/:id"
              render={props => (
                <Deal {...props} stores = {this.state.stores}  />
              )}
              />
       </Switch>
      </div>
    );
  }
}

export default App;
