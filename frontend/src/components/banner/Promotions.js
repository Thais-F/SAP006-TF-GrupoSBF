import {React, useEffect, useState} from 'react';
import { getPromotions
 } from '../../services';

const Banner = () => {
  const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        async function getPromos() {
            const products = await getPromotions()
            setPromotions(products)
            return products
        }
        getPromos()        
      }, []);

    return (
      <div className="grid-container">
          {promotions.map((items) => (
            <div key={items.id} className="card">
              <div>
              <p className="discount"> {items.discount === "null" ? '' : items.discount}%</p>
              <img className="pic" src={items.image} alt={items.name}/>
              </div>
              <div>
             <p className="shipping"> {items.freeShipping === "true" ? '' : (<p>Frete Grátis</p>)}</p>
             </div>
           {/* <div className="card-body"> */}
            <h2>{items.name}</h2>
              <p className="price">
               R$ {items.price}
              </p>
              <p className="old-price"> {items.oldPrice === "null" ? '' : items.oldPrice}</p>
            {/* <Rating>
             rate={items.rate}
             reviews={items.reviews}
            </Rating> */}
              <h3>{items.colors} cores</h3>
           </div>
          //  </div>
        ))}
      </div>
  //       <div>
  //           <div>{promotions.map((product) => (
  //     <div key={product.id} className="card">
  //     <p className="discount"> {product.discount === "null" ? '' : product.discount}</p>
  //     <img className="img" src={product.image} alt={product.name}/>
  //    <p className="shipping"> {product.freeShipping === "true" ? '' : (<p>Frete Grátis</p>)}</p>
  //  <div className="card-body">
  //  <h2>{product.name}</h2>
  //  <div className="price">
  //  <p className="old-price"> {product.oldPrice === "null" ? '' : product.oldPrice}</p>
  //  R$ {product.price}
  //    </div>
  //   <h3>{product.colors} cores</h3>
  //  </div>
  //  </div>
  //           ))}</div>
  //       </div>
    )

    
}


export default Banner
