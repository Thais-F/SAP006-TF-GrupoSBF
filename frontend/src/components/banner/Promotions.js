import {React, useEffect, useState} from 'react';
import { getPromotions
 } from '../../services';
 import Rating from '../product/Rating';

const Promotions = () => {
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
            <div key={items.id} className="promcard">
              <div>
              <p className="discount"> {items.discount === "null" ? '' : items.discount}%</p>
              <img className="pic" src={items.image} alt={items.name}/>
              </div>
              <div>
             <p className="shipping"> {items.freeShipping === "true" ? '' : (<p>Frete Grátis</p>)}</p>
             </div>
            <h2 className="itemname">{items.name}</h2>
              <p className="price">
               R$ {items.price}
              </p>
              <p className="old-price"> {items.oldPrice === "null" ? '' : items.oldPrice}</p>
              <Rating items={items}/>
              <h3>{items.colors} cores</h3>
           </div>
        ))}
      </div>
    )

    
}


export default Promotions