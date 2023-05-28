/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

class Experience extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="experience">
        <h2 className="subheader">Experience</h2>
        <h4 className="experience-miniheader" id="job-one">
          IT
        </h4>
        <p className="body-text" id="company-one">
          Strange Company
        </p>
        <p className="time-range" id="job-date-range-one">
          2009-2012
        </p>
        <ul className="job-description-list">
          <li className="body-text" id="job-one-point-one">
            Fixed stuff
          </li>
          <li className="body-text" id="job-one-point-two">
            Helped people
          </li>
          <li className="body-text" id="job-one-point-three">
            Improved processes
          </li>
        </ul>
        <h4 className="experience-miniheader" id="job-two">
          App Development
        </h4>
        <p className="body-text" id="company-two">
          Interesting Company
        </p>
        <p className="time-range" id="job-date-range-two">
          2012-present
        </p>
        <ul className="job-description-list">
          <li className="body-text" id="job-two-point-one">
            Built stuff
          </li>
          <li className="body-text" id="job-two-point-two">
            Helped users
          </li>
          <li className="body-text" id="job-two-point-three">
            Improved processes
          </li>
        </ul>
      </div>
    );
  }
}

export default Experience;
