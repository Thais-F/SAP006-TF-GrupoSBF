import React from 'react'
import CartItem from '../../components/cartItem/cartItem'

const Cart = () => {

    const productsList = [
        {
            "name":"Tênis Fila Lugano 6.0 V2 - Masculino","image":"https://imgcentauro-a.akamaihd.net/230x230/95149862.jpg","price":26.79,"oldPrice":null,"rate":3,"reviews":1225,"freeShipping":true,"discount":null,"id":"fb7f2f2c-cd94-4388-95b3-1f230647ee96","colors":2,"quantity":1
        },
        {
            "name":"Tênis Nike Court Lite 2 - Masculino","image":"https://imgcentauro-a.akamaihd.net/230x230/93833233.jpg","price":1880.63,"oldPrice":null,"rate":4,"reviews":1614,"freeShipping":false,"discount":null,"id":"7ea99647-f71f-4c27-943a-b6a7f97b9faf","colors":7,"quantity":1
        },
        {
            "name":"Tênis Asics Gel-Dedicate 6 - Masculino","image":"https://imgcentauro-a.akamaihd.net/250x250/9469584WA1/tenis-asics-gel-dedicate-6-masculino-img.jpg","price":566.83,"oldPrice":687.76,"rate":1,"reviews":1053,"freeShipping":true,"discount":82,"id":"34f7d111-f042-4a53-8dbb-9c64495a518e","colors":9,"quantity":3
        }
    ]
    return (
        <div>
            {/* <h1>Cart</h1> */}
            <CartItem productsList={productsList}/>
        </div>
    )
}

export default Cart
