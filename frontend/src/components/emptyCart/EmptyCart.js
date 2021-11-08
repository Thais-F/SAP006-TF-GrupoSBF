import React from 'react'
import carrinho from '../../assets/images/carrinho.jpeg';
import './EmptyCart.css';


const EmptyCart = () => {
    return (
        <div className="principal-container">
            <img src={carrinho} className='cart-img' alt='imagem carrinho' />
            <p className="title">Seu carrinho está vazio...</p>
            <p className="message">São milhares de produtos para você escolher Escolha seus produtos e adicione em seu carrinho</p>
            
        </div>
    )
}

export default EmptyCart
