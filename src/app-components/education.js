/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

class Education extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="education">
        <h2 className="subheader">Education</h2>
        <h4 className="education-miniheader" id="degree-one">
          Secondary School
        </h4>
        <p className="body-text" id="school-one">
          Overrated Secondary School
        </p>
        <p className="time-range" id="school-date-range-one">
          2005-2009
        </p>
        <h4 className="education-miniheader" id="degree-two">
          Bachelor Of Technology
        </h4>
        <p className="body-text" id="school-two">
          Overrated University
        </p>
        <p className="time-range" id="school-date-range-two">
          2010-2012
        </p>
      </div>
    );
  }
}

export default Education;
