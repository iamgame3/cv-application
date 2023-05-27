/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import email from "../images/icons/email.svg";
import cellphone from "../images/icons/cellphone.svg";
import location from "../images/icons/location.svg";
import website from "../images/icons/website.svg";

class ContactInfo extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="contact-info">
        <div className="email-container">
          <img className="email-icon" src={email} alt="Icon of an email" />
          <p className="email-text">email@example.com</p>
        </div>
        <div className="cellphone-container">
          <img
            className="cellphone-icon"
            src={cellphone}
            alt="Icon of an cellphone"
          />
          <p className="cellphone-text">123-456-7890</p>
        </div>
        <div className="location-container">
          <img
            className="location-icon"
            src={location}
            alt="Icon of an map location indicator"
          />
          <p className="location-text">Dubai, UAE</p>
        </div>
        <div className="website-container">
          <img
            className="website-icon"
            src={website}
            alt="Icon of an website"
          />
          <p className="website-text">www.NotARealWebsite.com</p>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
