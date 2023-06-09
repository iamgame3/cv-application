/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import ContactInfo from "./contact-info";
import Profile from "./profile";
import Education from "./education";
import Experience from "./experience";

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
        <Education />
        <Experience />
      </div>
    );
  }
}

export default Body;
