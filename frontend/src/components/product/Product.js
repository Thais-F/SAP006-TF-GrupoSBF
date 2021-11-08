import{ React, useEffect, useState } from 'react';
import { getProducts } from '../../services';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      async function getPromos() {
          const product = await getProducts()
          setProducts(product)
          console.log(product)
          return product
      }
      getPromos()        
    }, []);

  return (
      <div>
          {products.map((items) => (
           <h1>{items.name}</h1>
        ))}
      </div>
  )
}

export default Product
