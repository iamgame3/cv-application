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
    document.querySelector("#name-input").value =
      document.querySelector(".name").textContent;
    document.querySelector("#job-input").value =
      document.querySelector(".job").textContent;
    document.querySelector("#email-input").value =
      document.querySelector(".email-text").textContent;
    document.querySelector("#cellphone-input").value =
      document.querySelector(".cellphone-text").textContent;
    document.querySelector("#location-input").value =
      document.querySelector(".location-text").textContent;
    document.querySelector("#website-input").value =
      document.querySelector(".website-text").textContent;
    document.querySelector("#profile-input").value =
      document.querySelector("#profile-text").textContent;
    document.querySelector("#degree-one-input").value =
      document.querySelector("#degree-one").textContent;
    document.querySelector("#school-one-input").value =
      document.querySelector("#school-one").textContent;
    document.querySelector("#school-date-range-one-input").value =
      document.querySelector("#school-date-range-one").textContent;
    document.querySelector("#degree-two-input").value =
      document.querySelector("#degree-two").textContent;
    document.querySelector("#school-two-input").value =
      document.querySelector("#school-two").textContent;
    document.querySelector("#school-date-range-two-input").value =
      document.querySelector("#school-date-range-two").textContent;
    document.querySelector("#job-one-input").value =
      document.querySelector("#job-one").textContent;
    document.querySelector("#company-one-input").value =
      document.querySelector("#company-one").textContent;
    document.querySelector("#job-date-range-one-input").value =
      document.querySelector("#job-date-range-one").textContent;
    document.querySelector("#job-one-point-one-input").value =
      document.querySelector("#job-one-point-one").textContent;
    document.querySelector("#job-one-point-two-input").value =
      document.querySelector("#job-one-point-two").textContent;
    document.querySelector("#job-one-point-three-input").value =
      document.querySelector("#job-one-point-three").textContent;
    document.querySelector("#job-two-input").value =
      document.querySelector("#job-two").textContent;
    document.querySelector("#company-two-input").value =
      document.querySelector("#company-two").textContent;
    document.querySelector("#job-date-range-two-input").value =
      document.querySelector("#job-date-range-two").textContent;
    document.querySelector("#job-two-point-one-input").value =
      document.querySelector("#job-two-point-one").textContent;
    document.querySelector("#job-two-point-two-input").value =
      document.querySelector("#job-two-point-two").textContent;
    document.querySelector("#job-two-point-three-input").value =
      document.querySelector("#job-two-point-three").textContent;

    modalBackground.addEventListener(
      "click",
      () => {
        modal.style.visibility = "hidden";
        modalBackground.style.visibility = "hidden";
      },
      true
    );
  }

  // eslint-disable-next-line class-methods-use-this
  applyEdits() {
    document.querySelector(".edit-modal").style.visibility = "hidden";
    document.querySelector(".edit-modal-background").style.visibility =
      "hidden";
    document.querySelector(".name").textContent =
      document.querySelector("#name-input").value;
    document.querySelector(".job").textContent =
      document.querySelector("#job-input").value;
    document.querySelector(".email-text").textContent =
      document.querySelector("#email-input").value;
    document.querySelector(".cellphone-text").textContent =
      document.querySelector("#cellphone-input").value;
    document.querySelector(".location-text").textContent =
      document.querySelector("#location-input").value;
    document.querySelector(".website-text").textContent =
      document.querySelector("#website-input").value;
    document.querySelector("#profile-text").textContent =
      document.querySelector("#profile-input").value;
    document.querySelector("#degree-one").textContent =
      document.querySelector("#degree-one-input").value;
    document.querySelector("#school-one").textContent =
      document.querySelector("#school-one-input").value;
    document.querySelector("#school-date-range-one").textContent =
      document.querySelector("#school-date-range-one-input").value;
    document.querySelector("#degree-two").textContent =
      document.querySelector("#degree-two-input").value;
    document.querySelector("#school-two").textContent =
      document.querySelector("#school-two-input").value;
    document.querySelector("#school-date-range-two").textContent =
      document.querySelector("#school-date-range-two-input").value;
    document.querySelector("#job-one").textContent =
      document.querySelector("#job-one-input").value;
    document.querySelector("#company-one").textContent =
      document.querySelector("#company-one-input").value;
    document.querySelector("#job-date-range-one").textContent =
      document.querySelector("#job-date-range-one-input").value;
    document.querySelector("#job-one-point-one").textContent =
      document.querySelector("#job-one-point-one-input").value;
    document.querySelector("#job-one-point-two").textContent =
      document.querySelector("#job-one-point-two-input").value;
    document.querySelector("#job-one-point-three").textContent =
      document.querySelector("#job-one-point-three-input").value;
    document.querySelector("#job-two").textContent =
      document.querySelector("#job-two-input").value;
    document.querySelector("#company-two").textContent =
      document.querySelector("#company-two-input").value;
    document.querySelector("#job-date-range-two").textContent =
      document.querySelector("#job-date-range-two-input").value;
    document.querySelector("#job-two-point-one").textContent =
      document.querySelector("#job-two-point-one-input").value;
    document.querySelector("#job-two-point-two").textContent =
      document.querySelector("#job-two-point-two-input").value;
    document.querySelector("#job-two-point-three").textContent =
      document.querySelector("#job-two-point-three-input").value;
  }

  render() {
    return (
      <>
        <img
          className="edit-button"
          onClick={this.modalRevealer}
          src={settingsIcon}
          alt="Icon of 3 vertical dots."
        />
        <div className="edit-modal-background" />
        <div className="edit-modal">
          <form>
            <div className="title-input">
              <div className="form-input">
                <legend htmlFor="name-input">Name:</legend>
                <input type="text" name="name-input" id="name-input" />
              </div>
              <div className="form-input">
                <legend htmlFor="job-input">Occupation:</legend>
                <input type="text" name="job-input" id="job-input" />
              </div>
            </div>
            <div className="contact-info-input">
              <div className="form-input">
                <legend htmlFor="email-input">Email:</legend>
                <input type="text" name="email-input" id="email-input" />
              </div>
              <div className="form-input">
                <legend htmlFor="cellphone-input">Cell Number:</legend>
                <input
                  type="text"
                  name="cellphone-input"
                  id="cellphone-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="location-input">Location:</legend>
                <input type="text" name="location-input" id="location-input" />
              </div>
              <div className="form-input">
                <legend htmlFor="website-input">Website:</legend>
                <input type="text" name="website-input" id="website-input" />
              </div>
            </div>
            <div className="profile-input">
              <div className="form-input">
                <legend htmlFor="profile-input">Profile:</legend>
                <textarea rows="3" name="profile-input" id="profile-input" />
              </div>
            </div>
            <div className="education-input">
              <div className="form-input">
                <legend htmlFor="degree-one-input">1st Degree:</legend>
                <input
                  type="text"
                  name="degree-one-input"
                  id="degree-one-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="school-one-input">1st School:</legend>
                <input
                  type="text"
                  name="school-one-input"
                  id="school-one-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="school-date-range-one-input">
                  1st Date Range:
                </legend>
                <input
                  type="text"
                  name="school-date-range-one-input"
                  id="school-date-range-one-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="degree-two-input">2nd Degree:</legend>
                <input
                  type="text"
                  name="degree-two-input"
                  id="degree-two-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="school-two-input">2nd School:</legend>
                <input
                  type="text"
                  name="school-two-input"
                  id="school-two-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="school-date-range-two-input">
                  2nd Date Range:
                </legend>
                <input
                  type="text"
                  name="school-date-range-two-input"
                  id="school-date-range-two-input"
                />
              </div>
            </div>
            <div className="experience-input">
              <div className="form-input">
                <legend htmlFor="job-one-input">1st Job:</legend>
                <input type="text" name="job-one-input" id="job-one-input" />
              </div>
              <div className="form-input">
                <legend htmlFor="company-one-input">1st Company:</legend>
                <input
                  type="text"
                  name="company-one-input"
                  id="company-one-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="job-date-range-one-input">
                  1st Date Range:
                </legend>
                <input
                  type="text"
                  name="job-date-range-one-input"
                  id="job-date-range-one-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="job-one-point-one-input">1st Point:</legend>
                <input
                  type="text"
                  name="job-one-point-one-input"
                  id="job-one-point-one-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="job-one-point-two-input">2nd Point:</legend>
                <input
                  type="text"
                  name="job-one-point-two-input"
                  id="job-one-point-two-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="job-one-point-three-input">3rd Point:</legend>
                <input
                  type="text"
                  name="job-one-point-three-input"
                  id="job-one-point-three-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="job-two-input">2nd Job:</legend>
                <input type="text" name="job-two-input" id="job-two-input" />
              </div>
              <div className="form-input">
                <legend htmlFor="company-two-input">2nd Company:</legend>
                <input
                  type="text"
                  name="company-two-input"
                  id="company-two-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="job-date-range-two-input">
                  2nd Date Range:
                </legend>
                <input
                  type="text"
                  name="job-date-range-two-input"
                  id="job-date-range-two-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="job-two-point-one-input">1st Point:</legend>
                <input
                  type="text"
                  name="job-two-point-one-input"
                  id="job-two-point-one-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="job-two-point-two-input">2nd Point:</legend>
                <input
                  type="text"
                  name="job-two-point-two-input"
                  id="job-two-point-two-input"
                />
              </div>
              <div className="form-input">
                <legend htmlFor="job-two-point-three-input">3rd Point:</legend>
                <input
                  type="text"
                  name="job-two-point-three-input"
                  id="job-two-point-three-input"
                />
              </div>
            </div>
            <div className="submit-button-container">
              <button
                type="button"
                onClick={this.applyEdits}
                className="submit-button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default EditModal;
