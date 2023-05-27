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
        <h4 className="miniheader">Secondary School</h4>
        <p className="body-text">Overrated Secondary School</p>
        <p className="time-range">2015-2019</p>
        <h4 className="miniheader">Bachelor Of Technology</h4>
        <p className="body-text">Overrated University</p>
        <p className="time-range">2020-2022</p>
      </div>
    );
  }
}

export default Education;
