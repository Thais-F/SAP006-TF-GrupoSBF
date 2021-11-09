import{ React, useEffect, useState } from 'react';
import { getProducts } from '../../services';
// import Rating from './Rating';
import Button from '../button/Button'
import './product.css';


const Product = () => {
  const [products, setProducts] = useState([]);
  // localStorage.removeItem('produtosDoCarrinho')

  const adcCarrinho = (event) => {
    const newProduct = products.filter((item) => item.id === event.target.id)
    newProduct[0].quantity = 1
    console.log(newProduct)
    const carrinho = JSON.parse(localStorage.getItem('produtosDoCarrinho'))

    if(carrinho === null) {
      localStorage.setItem('produtosDoCarrinho', JSON.stringify(newProduct))
    } else {
      const carrinhoAtualizado = [...carrinho, newProduct[0]]
      localStorage.removeItem('produtosDoCarrinho')
      localStorage.setItem('produtosDoCarrinho', JSON.stringify(carrinhoAtualizado))

    }
    console.log(JSON.parse(localStorage.getItem('produtosDoCarrinho')))    
  }

  useEffect(() => {
      async function getPromos() {
          const product = await getProducts()
          setProducts(product)
          return product
      }
      getPromos()        
    }, []);
    
  return (
      <div>
          {products.map((items) => (
            <div key={items.id} className="card">
              <p className="discount"> {items.discount === "null" ? '' : items.discount}</p>
              <img className="img" src={items.image} alt={items.name}/>
             <p className="shipping"> {items.freeShipping === "true" ? '' : (<p>Frete Grátis</p>)}</p>
           <div className="card-body">
           <h2>{items.name}</h2>
           <div className="price">
           <p className="old-price"> {items.oldPrice === "null" ? '' : items.oldPrice}</p>
           R$ {items.price}
             </div>
            {/* <Rating/> */}
            <h3>{items.colors} cores</h3>
            <Button
              id={items.id}
              onClick={(event) => adcCarrinho(event)} 
            />

           </div>
           </div>
        ))}
      </div>
  )
}

export default Product
