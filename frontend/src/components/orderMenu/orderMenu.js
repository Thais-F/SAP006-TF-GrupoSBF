import React, { useEffect, useState } from 'react'

const OrderMenu = (productsList) => {
    const [products, setProducts] = useState([])
    const [oldpriceProducts, setOldPriceProducts] = useState([])
    const [totalOldPrice, setTotalOldPrice] = useState([])
    const [totalPrice, setTotalPrice] = useState([])

    useEffect(() => {
        async function prices()  {
            setProducts(productsList.productsList)
            const condition = !products === []
            await condition
        }
            
        // console.log(products)
        //const findOldPrice = products.find((item) => item.oldPrice !== null);
        //setOldPriceProducts(findOldPrice);
        //console.log(oldpriceProducts)
        // setTotalOldPrice(oldpriceProducts.reduce((acumulador, valorAtual, index, array) => {
        //     return acumulador + valorAtual;
        // }));

    }, []);

    if (!products === []) {
        console.log(products)
        const totalPriceSum = products.price.reduce((acumulador, valorAtual, index, array) => {
            return acumulador + valorAtual;
        })
        console.log(totalPriceSum)
        setTotalPrice(totalPriceSum)
    }

    console.log(totalPrice)
    return (
        <div>
            <h1>Resumo do pedido</h1>
            <hr />
            <div className="info">
                <p>Subtotal</p>
                <p> {totalPrice} </p>
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

    )
}


export default OrderMenu