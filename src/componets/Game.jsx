import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
const Game = (props) => {
  return (
    <MDBListGroupItem>
      <h4>{props.internalName}</h4>
      <img src={props.thumb} />

      <h4>${props.salePrice}</h4>
      <Link to={`/deal/${props.dealID}`}> Deal </Link>
    </MDBListGroupItem>
  );
};

export default Game;
