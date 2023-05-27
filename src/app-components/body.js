/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

class Body extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="body">
        <div className="contact-info">
            1
        </div>
        <div className="profile">
            2
        </div>
        <div className="education">
            3
        </div>
        <div className="experience">
            4
        </div>
      </div>
    );
  }
}

export default Body;
