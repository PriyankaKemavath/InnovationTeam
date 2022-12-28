import React from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

const LoadingModal = (props) => {
  return (
    <Modal
      show={props.show}
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center h-100">
          Submitting&nbsp;
          <Spinner animation="grow" variant="primary" size="sm" />
          &nbsp;
          <Spinner animation="grow" variant="primary" size="sm" />
          &nbsp;
          <Spinner animation="grow" variant="primary" size="sm" />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoadingModal;
