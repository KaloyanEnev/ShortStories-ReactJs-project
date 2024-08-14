import React from 'react';
import '../../css/ConformationModal.css'; 

export default function ConfirmationModal({ message, onConfirm, onCancel }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>{message}</p>
                <div className="modal-buttons">
                    <button onClick={onConfirm} className="btn confirm-btn">Yes</button>
                    <button onClick={onCancel} className="btn cancel-btn">No</button>
                </div>
            </div>
        </div>
    );
}