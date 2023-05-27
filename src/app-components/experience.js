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
        <h4 className="experience-miniheader">IT</h4>
        <p className="body-text">Strange Company</p>
        <p className="time-range">2009-2012</p>
        <ul className="job-description-list">
          <li className="body-text">Fixed stuff</li>
          <li className="body-text">Helped people</li>
          <li className="body-text">Improved processes</li>
        </ul>
        <h4 className="experience-miniheader">App Development</h4>
        <p className="body-text">Interesting Company</p>
        <p className="time-range">2012-present</p>
        <ul className="job-description-list">
          <li className="body-text">Built stuff</li>
          <li className="body-text">Helped users</li>
          <li className="body-text">Improved processes</li>
        </ul>
      </div>
    );
  }
}

export default Experience;
