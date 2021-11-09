import React from 'react';
import './modal.css';

const Modal = ({ onClose = () => { }, children }) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === 'modal') onClose();
      };

    return (
        <div className="modal" id="modal" onClick={handleOutsideClick}>
             <div className="modalContainer">
                <div className="modalContent">{children}</div>
                <p className="modalText">"Parabéns, compra concluída"</p>
                <button className='button closeModal' onClick={onClose}>Fechar</button>
            </div>
        </div>
    )
}

export default Modal
