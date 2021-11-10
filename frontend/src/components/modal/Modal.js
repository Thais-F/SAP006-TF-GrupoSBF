import React, { useState } from 'react';
import './modal.css';

const Modal = ({response}) => {

    const [ isOpen, setIsOpen ] = useState(true)

    const handleOutsideClick = (e) => {
        setIsOpen(false)
      };

    return (
        isOpen &&
        <div className="modal" id="modal" >
             <div className="modalContainer">
                <div className="modalContent">
                    <p className="modalText">{response}</p>
                </div>
                
                <button className='button closeModal' onClick={handleOutsideClick}>Fechar</button>
            </div>
        </div>
    )
}

export default Modal
