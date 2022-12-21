import React from "react";
import teamMemberPic from "../../../assets/TeamMemberPic.png";

import classes from "../ModalPopup.module.css";

const MemberProfileModal = () => {
  return (
    <div
      className="modal fade rounded"
      id="memberProfileModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className={`modal-header ${classes.popupheader}`}>
            <h5 className="modal-title">Team Member Profile</h5>
            <button
              type="button"
              className={`close ${classes.closebtn}`}
              data-dismiss="modal"
              aria-label="Close"
            >
              x{/* <span aria-hidden="true">&times;</span> */}
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-md-3">
                  <img
                    className="rounded-circle"
                    src={teamMemberPic}
                    width="100"
                  />
                </div>
                <div className="col-md-9">
                  <div>CJ</div>
                  <div>(5675473)</div>
                  <span className={`text-black-50 ${classes.designation}`}>
                    <i className="bi bi-envelope"></i>&nbsp;
                    cj@email.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="bi bi-telephone"></i>&nbsp;+800-12 12 23 52
                  </span>
                </div>
              </div>
              <div className="row no-gutters">
                <span>
                  <label>
                    Role:&nbsp;<b>Team Lead</b>
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label>
                    Account:&nbsp;<b>Nestle</b>
                  </label>
                </span>
              </div>
              <div className="row no-gutters">
                <label>What are they doing/working on?</label>
              </div>
              <div className="row no-gutters">
                <label>What is their area of interests?</label>
              </div>
              <br />
              <br />
              <div className="form-group">
                <button
                  className={`btn ${classes.cancelbtn} float-right`}
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfileModal;
