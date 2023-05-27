/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import me from "../images/me.png";

class Title extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="title">
        <div className="title-text">
          <div className="name">Sample Name</div>
          <div className="job">Web Developer</div>
        </div>
        <img className="title-image" src={me} alt="Drawing of a stickman." />
      </div>
    );
  }
}

export default Title;
