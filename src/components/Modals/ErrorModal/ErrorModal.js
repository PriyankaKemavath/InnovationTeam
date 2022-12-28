import React from "react";
import { Modal, Button } from "react-bootstrap";

const ErrorModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleModalClose}>
      <Modal.Body
        style={{ backgroundColor: "#f8d7da", borderColor: "#f5c6cb" }}
      >
        <div className="alert alert-danger" role="alert">
          <h6 className="alert-heading">
            An error occurred while submitting the response.
          </h6>
          <h6>Please try again!!!</h6>
          <p>
            Error details: <strong>{props.postError}</strong>
          </p>

          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="danger" onClick={props.handleModalClose}>
              Okay
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ErrorModal;
