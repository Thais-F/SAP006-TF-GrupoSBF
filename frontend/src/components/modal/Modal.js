import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './modal.css';

const Modal = ({ response }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true)

    function navigateHome() {
        navigate('/')
    }

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

                <button className='button closeModal' onClick={() => {
                    handleOutsideClick()
                    localStorage.removeItem('produtosDoCarrinho')
                    navigateHome();
                }}>Fechar</button>
            </div>
        </div>
    )
}

export default Modal
//<button className='button closeModal' onClick={handleOutsideClick}>Fechar</button>