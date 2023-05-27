/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import ContactInfo from "./contact-info";
import Profile from "./profile";

class Body extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="body">
        <ContactInfo />
        <Profile />
        <div className="education">3</div>
        <div className="experience">4</div>
      </div>
    );
  }
}

export default Body;
