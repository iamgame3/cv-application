/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import settingsIcon from "../images/icons/dots.png";

class EditModal extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  // eslint-disable-next-line class-methods-use-this
  modalRevealer() {
    const modalBackground = document.querySelector(".edit-modal-background");
    const modal = document.querySelector(".edit-modal");
    modalBackground.style.visibility = "visible";
    modal.style.visibility = "visible";
    modalBackground.addEventListener(
      "click",
      () => {
        modal.style.visibility = "hidden";
        modalBackground.style.visibility = "hidden";
      },
      true
    );
  }

  render() {
    return (
      <>
        <img
          className="edit-button"
          onClick={this.modalRevealer}
          src={settingsIcon}
          alt="Icon of vertical 3 dots."
        />
        <div className="edit-modal-background" />
        <div className="edit-modal">Yo</div>
      </>
    );
  }
}

export default EditModal;
