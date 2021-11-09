import React from 'react'
import './index.css'

const CartItem = () => {

    const products = JSON.parse(localStorage.getItem('produtosDoCarrinho'))
    console.log(products)

  



    // useEffect(() => {
    //     setProducts(productsList.productsList)
    // }, []);

    return (
        <div className="cartItems">
            <div className="tittles">
            <h1>Meu carrinho</h1>
            <h1 id="h1-quantity" className="active-desactive">Quantidade</h1>
            <h1 id="h1-Unit" className="active-desactive">Unitário</h1>
            <h1 id="h1-total" className="active-desactive">Total</h1>
            </div>

            {products.map((product) => (
                <div key={product.id} className="card">
                    <div className="img">
                        <img alt="product" src={product.image}/>
                    </div>
                    <div className="info">  
                        <h1>{product.name}</h1>
                        <div className="buttons">
                            <button className="add-minus-button"><span className="add-minus">-</span></button>
                            <p className="quantity">{product.quantity}</p>
                            <button className="add-minus-button"><span className="add-minus">+</span></button>
                            <button className="removeButton">Remover</button>
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
        </div>
    )
}

export default CartItem