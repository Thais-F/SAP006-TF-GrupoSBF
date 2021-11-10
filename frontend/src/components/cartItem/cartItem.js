import React, { useEffect, useState } from 'react'
import './index.css'

const CartItem = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem('produtosDoCarrinho')))
    }, []);

    console.log(products)

    function plusOneToChart(e, product) {
        e.preventDefault();
        const findProduct = products.find((item) => item.id === product.id);
        findProduct.quantity += 1;
        // const index = products.indexOf(findProduct)

        const productsArray = products.filter((item) => item.id !== product.id)
        productsArray.push(findProduct)

        // productsArray.splice(index, 1, findProduct)
        console.log(productsArray)

        localStorage.removeItem('produtosDoCarrinho')
        localStorage.setItem('produtosDoCarrinho', JSON.stringify(productsArray))
        setProducts([...JSON.parse(localStorage.getItem('produtosDoCarrinho'))])
    }

    function minusOneToChart(e, product) {
        e.preventDefault();
        const findProduct = products.find((item) => item.id === product.id);
        if (findProduct.quantity === 1) {
            const productsArray = products.filter((item) => item.id !== product.id)
            localStorage.removeItem('produtosDoCarrinho')
            localStorage.setItem('produtosDoCarrinho', JSON.stringify(productsArray))
            setProducts([...JSON.parse(localStorage.getItem('produtosDoCarrinho'))])
        } else {
            findProduct.quantity -= 1;
            const productsArray = products.filter((item) => item.id !== product.id)
            productsArray.push(findProduct)
            localStorage.removeItem('produtosDoCarrinho')
            localStorage.setItem('produtosDoCarrinho', JSON.stringify(productsArray))
            setProducts([...JSON.parse(localStorage.getItem('produtosDoCarrinho'))])
        }
    }

    function removeOne(e, product) {
        e.preventDefault()
        const productsArray = products.filter((item) => item.id !== product.id)
        localStorage.removeItem('produtosDoCarrinho')
        localStorage.setItem('produtosDoCarrinho', JSON.stringify(productsArray))
        setProducts([...JSON.parse(localStorage.getItem('produtosDoCarrinho'))])
    }

    let pricesSum = [];
    products.forEach((item) => {
        pricesSum.push(parseFloat((item.price.toFixed(2) * item.quantity).toFixed(2)))
    })
    const total = pricesSum.reduce((acc, current) => acc + current,0)

    return (
        <div className="cartItems">
            <div className="tittles">
                <h1>Meu carrinho</h1>
                <h1 id="h1-quantity" className="active-desactive">Quantidade</h1>
                <h1 id="h1-Unit" className="active-desactive">Unitário</h1>
                <h1 id="h1-total" className="active-desactive">Total</h1>
            </div>

            {products.map((product) => (
                <div key={product.id} className="card-div">
                    <div className="img-div">
                        <img alt="product" src={product.image} />
                    </div>
                    <div className="info">
                        <h1>{product.name}</h1>
                        <div className="buttons">
                            <button id={product.id} onClick={(e) => minusOneToChart(e, product)} className="add-minus-button"><span className="add-minus">-</span></button>
                            <p className="quantity">{product.quantity}</p>
                            <button id={product.id} onClick={(e) => plusOneToChart(e, product)} className="add-minus-button"><span className="add-minus">+</span></button>
                            <button id={product.id} onClick={(e) => removeOne(e, product)} className="removeButton">Remover</button>
                        </div>
                        <span id="total-unique-price" className="active-desactive">R${product.price.toFixed(2)}</span>
                        {product.oldPrice && <span id="old-price" className="active-desactive">R${product.oldPrice.toFixed(2)}</span>}
                        <div className="total-spans">
                            <span id={product.oldPrice ? "total-price-with-old-orice" : "total-price"}>R${(product.price.toFixed(2) * product.quantity).toFixed(2)}</span>
                            {product.oldPrice && <span id="total-old-price" >R${(product.oldPrice.toFixed(2) * product.quantity).toFixed(2)}</span>}
                        </div>
                    </div>
                </div>
            ))}

            <div className={"orderMenu"}>
                <h1>Resumo do pedido</h1>
                <hr />
                <div className="info">
                    <p>Subtotal</p>
                    <p> {total} </p>
                </div>
                <div className="info">
                    <p>Desconto</p>
                    <p></p>
                </div>
                <div className="info">
                    <p>Você está economizando:{ }</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default CartItem