/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

class Profile extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  render() {
    return (
      <div className="profile">
        <h2 className="subheader">Profile</h2>
        <p className="body-text" id="profile-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor
          at mi sed elementum. Suspendisse in arcu condimentum, maximus arcu id,
          lobortis justo. Donec ut eros vel lorem volutpat mollis convallis quis
          purus. Quisque facilisis dolor eget mi sollicitudin, dignissim
          elementum risus molestie.
        </p>
      </div>
    );
  }
}

export default Profile;
