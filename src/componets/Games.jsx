import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Game from "./Game";
class Games extends Component {
  state = {
    img: "",
    games: [],
  };
  componentDidMount() {
    Axios.get(
      "https://www.cheapshark.com/api/1.0/deals?upperPrice=15"
    ).then((result) => {
      console.log(result);
      this.setState({ games: result.data });
    });
  }
  showGames = () => {
    let gameList = this.state.games.map((eachGame) => {
      return <Game {...eachGame}/>;
    });
    return gameList;
  };
  render() {
    return (
      <MDBContainer className="tests">
        <MDBListGroup style={{ width: "22rem" }}>
          {this.showGames()}
        </MDBListGroup>
      </MDBContainer>
    );
  }
}

export default Games;
