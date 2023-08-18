import React from 'react';
import "./error-modal.css";

function ErrorModal({handleClose, handleDelete}) {
      return (
    <div className="modal-section">
            <div className="modal-title">
                <p>Arr you sour you want to delete it.</p>
                <div className="button-section">
                    <button className="button1" onClick={() =>handleClose()}>Close</button>
                    <button  className="button1 button2" onClick={() =>handleDelete()}>Delete</button>
                </div>
            </div>
    </div>
  )
}

export default ErrorModal
