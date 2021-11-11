import React from 'react'
import { useNavigate } from 'react-router-dom';
import carrinho from '../../assets/images/carrinho.png';
import './EmptyCart.css';


const EmptyCart = () => {

    let navigate = useNavigate();

    function navigateHome() {
        navigate('/')
    }
    return (
        <div className="principal-container">
            <img src={carrinho} className='cart-img' alt='imagem carrinho' />
            <div className="secundary-container">
                <p className="title">Seu carrinho está vazio...</p>
                <p className="message">São milhares de produtos para você escolher Escolha seus produtos e adicione em seu carrinho.</p>
                <button className="btn" onClick={navigateHome}>Comece a comprar</button>
            </div>
        </div>
    )
}

export default EmptyCart
