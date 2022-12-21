import React from "react";
import UploadDocumentModal from "../Modals/UploadDocumentModal/UploadDocumentModal";
import classes from "./KMS.module.css";

export default function KMS() {
  return (
    <div className="container p-4">
      <UploadDocumentModal />
      <div className="row">
        <h5>Knowledge Management</h5>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card custom-card border-0">
            <div
              className={`card-header custom-card-header rounded ${classes.upload}`}
              data-toggle="modal"
              data-target="#uploadDocumentModal"
            >
              <span>
                <i className="bi bi-upload"></i> &nbsp; Upload Documents
              </span>
            </div>
          </div>
          <div className="card custom-card text-left mt-3">
            <div className="card-header custom-card-header">What's New?</div>
            <div className="card-body"></div>
          </div>
          <div className="card custom-card text-left mt-3">
            <div className="card-header custom-card-header">Categories</div>
            <div className="card-body">
              <div className={classes.category}>
                <span className={classes.icon}>
                  <i className="bi bi-list-check"></i> &nbsp;Checklists
                </span>
              </div>
              <div className={classes.category}>
                <span className={classes.icon}>
                  <i className="bi bi-patch-check-fill"></i> &nbsp;Best
                  Practices
                </span>
              </div>
              <div className={classes.category}>
                <span className={classes.icon}>
                  <i className="bi bi-p-square-fill"></i> &nbsp;
                  <span className={classes.categoryName}>Presentations</span>
                </span>
              </div>
              <div className={classes.category}>
                <span className={classes.icon}>
                  <i className="bi bi-file-earmark-text-fill"></i>
                  &nbsp;Whitepapers
                </span>
              </div>
              <div className={classes.category}>
                <span className={classes.icon}>Ericsson</span>
              </div>
              <div className={classes.category}>
                <span className={classes.icon}>Nestle</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card custom-card">
            <div className="card-body">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="card custom-card mt-3">
            <div className="card-header custom-card-header">
              Recently Updated
            </div>
            <div className="card-body"></div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="card custom-card">
                <div className="card-header custom-card-header">
                  Best Practices
                </div>
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card custom-card">
                <div className="card-header custom-card-header">Checklists</div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="card custom-card">
                <div className="card-header custom-card-header">Documents</div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
