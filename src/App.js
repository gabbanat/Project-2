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
    stores: [],
    allGames: [],
    games : []
  }
  componentDidMount(){
    console.log(this)
    Axios.get("https://www.cheapshark.com/api/1.0/stores").then(res => {
    this.setState({
      stores: res.data,
      
    })
  })
  Axios.get(
    "https://www.cheapshark.com/api/1.0/deals?upperPrice=15"
  ).then((result) => {
    console.log(result);
    this.setState({ 
      games: result.data,
      allGames: result.data

    
    });
  });

}
  search = (e) => {
    console.log(e.target.value)
    let filterGames = this.state.allGames.filter(eachGame => {
      
      return eachGame.title.toUpperCase().includes(e.target.value.toUpperCase())
    })
    console.log(filterGames.length)
    this.setState({

      games: filterGames
    })
  }
  render() {
    return (
      <div className="App">
      
      <Navbar search = {this.search}/>
      <iframe width="420" height="315" frameborder="0" allow="autoplay"
src="https://www.youtube.com/embed/KlbLLRdg9u8?autoplay=1&loop=1&controls=0&mute=1&start=10">
</iframe>

       <Switch>
       <Route
              exact
              path="/Games"
              render={props => (
                <Games {...props} games={this.state.games} />
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
