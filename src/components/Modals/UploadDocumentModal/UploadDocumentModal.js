import React from "react";

import classes from "../ModalPopup.module.css";

const UploadDocumentModal = () => {
  return (
    <div
      className="modal fade"
      id="uploadDocumentModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className={`modal-header ${classes.popupheader}`}>
            <h5 className="modal-title" id="exampleModalLabel">
              Upload Document
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              style={{ background: "#5F1EBE", color: "#FFFFFF" }}
            >
              x{/* <span aria-hidden="true">&times;</span> */}
            </button>
          </div>
          <div
            className="modal-body"
            style={{
              backgroundColor: "white",
              color: "black",
            }}
          >
            <div className="form-group" style={{ textAlign: "left" }}>
              <label htmlFor="categorySelect" className="text-left">
                Category: <span className={classes.mandatory}>*</span>
              </label>
              <select className="form-control w-75" id="categorySelect">
                <option value="Select Category">Select Category</option>
                <option>Checklists</option>
                <option>Best Practices</option>
                <option>Presentations</option>
                <option>Whitepapers</option>
              </select>
            </div>
            <div className="form-group" style={{ textAlign: "left" }}>
              <label htmlFor="description" className="text-left">
                Description:
              </label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Enter text here..."
                rows="3"
              ></textarea>
            </div>
            <div className="form-group" style={{ textAlign: "left" }}>
              <label htmlFor="attachment" className="text-left">
                Attachment: <span className={classes.mandatory}>*</span>
              </label>
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
              <button className={`btn ${classes.submitbtn}`}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocumentModal;
