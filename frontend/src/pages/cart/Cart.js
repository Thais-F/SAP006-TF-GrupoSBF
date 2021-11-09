import React from 'react'
import CartItem from '../../components/cartItem/cartItem'
import EmptyCart from '../../components/emptyCart/EmptyCart'

const Cart = () => {

    return (
        <div>
            {JSON.parse(localStorage.getItem('produtosDoCarrinho')) === null ?
            <EmptyCart /> :
            <CartItem/>}
        </div>
    )
}

export default Cart
