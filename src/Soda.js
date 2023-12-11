import React, { Component } from "react";
import Message from "./Message";
import { Link } from "react-router-dom";
import sodaImg from "./assets/images/soda.png";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <img src={sodaImg} alt="fanta can" />
        <Message>
          <h1>Soda</h1>
          <Link to="/">Go Back</Link>
        </Message>

        <img src={sodaImg} alt="fanta can" />
      </div>
    );
  }
}

export default Soda;
