import React from 'react'
import OrderMenu from '../../components/orderMenu/orderMenu'
// import CartItem from '../../components/cartItem/cartItem'

const Cart = () => {
    const productsList = [
        {"name":"Bicicleta Spinning Kikos F5I","image":"https://imgcentauro-a.akamaihd.net/230x230/93675500.jpg","price":1053.69,"oldPrice":null,"rate":5,"reviews":400,"freeShipping":true,"discount":null,"id":"21ab675f-12bc-4521-9d2e-82fffda8bcdb","colors":6, "quantity":2 },
        {"name":"Mountain Bike Caloi Velox - Aro 29 - Câmbio Indexado - Freios V-Brake","image":"https://imgcentauro-a.akamaihd.net/230x230/94984102.jpg","price":426.65,"oldPrice":null,"rate":3,"reviews":1538,"freeShipping":true,"discount":null,"id":"1ebcfc3f-bd17-4bf4-9020-02c98ab37033","colors":5, "quantity":1},
        {"name":"Trampolim Jump Oxer - 32 Molas - Diâmetro 95 cm","image":"https://imgcentauro-a.akamaihd.net/230x230/94284602.jpg","price":1708.63,"oldPrice":null,"rate":3,"reviews":1149,"freeShipping":false,"discount":null,"id":"410db400-4d4b-4d79-8963-f56b4b6046d9","colors":5, "quantity":1}
    ]

    return (
        <div>
            <h1>Cart - feito o componente itens</h1>
            {/* <CartItem productsList={productsList}/> */}
            <OrderMenu productsList={productsList}/>
        </div>
    )
}

export default Cart
