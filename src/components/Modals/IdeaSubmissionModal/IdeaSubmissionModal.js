import React from "react";

import classes from "../ModalPopup.module.css";

const IdeaSubmissionModal = () => {
  return (
    <div
      className="modal fade rounded"
      id="ideaSubmissionModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className={`modal-header ${classes.popupheader}`}>
            <h5 className="modal-title">
              Submit Idea (or) Use Case (or) Innovation
            </h5>
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
            <div className="row">
              <div className="col-md-6">
                <div className="form-group text-left">
                  <label htmlFor="sapid">
                    SAP ID: <span className={classes.mandatory}>*</span>
                  </label>
                  <input
                    id="sapid"
                    type="text"
                    className="form-control"
                    placeholder="Enter SAP ID"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group text-left">
                  <label htmlFor="email">
                    Email: <span className={classes.mandatory}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
            </div>
            <div className="form-group text-left">
              <label htmlFor="title">
                Idea/ Use Case/ Innovation Title:&nbsp;
                <span className={classes.mandatory}>*</span>
              </label>
              <input
                id="title"
                type="text"
                className="form-control"
                placeholder="Enter Title"
              />
            </div>
            <div className="form-group text-left">
              <label htmlFor="details">
                Idea/ Use Case/ Innovation Ideas:&nbsp;
                <span className={classes.mandatory}>*</span>
              </label>
              <textarea
                className="form-control"
                id="details"
                placeholder="Enter text here..."
                rows="3"
              ></textarea>
            </div>
            <div className="form-group text-left">
              <label htmlFor="attachment">Attachment (optional)</label>
              <input
                className="form-control-file btn"
                id="attachment"
                type="file"
              />
            </div>
            <br />
            <br />
            <div className="form-group">
              <button
                className={`btn ${classes.cancelbtn}`}
                data-dismiss="modal"
              >
                Cancel
              </button>
              &nbsp; &nbsp;
              <button className={`btn ${classes.submitbtn}`}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaSubmissionModal;
