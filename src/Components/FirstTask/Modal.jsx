import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
        <div className="d-flex justify-content-center">

      <button className="text-center btn btn-primary" onClick={toggleModal}>
        Open Modal
      </button>

      {isModalOpen && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal Content</h5>
               
              </div>
              <div className="modal-body">
                <p>This is a sample modal popup!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Close
                </button>
            
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
  );
};

export default Modal;
