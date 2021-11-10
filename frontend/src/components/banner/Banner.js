import {React, useEffect, useState} from 'react';
import { getPromotions} from '../../services';
 import BannerProm from '../../assets/images/Banner.png';
 import './banner.css';
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
        <div>
          <div className="banner-promo">
            <img src={BannerProm} className='banner-img' alt='banner mostrando desconto e cupom  ' />
          </div>   

            <div>{promotions.map((product) => (
      <div key={product.id} className="card">
      <p className="discount"> {product.discount === "null" ? '' : product.discount}</p>
      <img className="img" src={product.image} alt={product.name}/>
     <p className="shipping"> {product.freeShipping === "true" ? '' : (<p>Frete Grátis</p>)}</p>
   <div className="card-body">
   <h2>{product.name}</h2>
   <div className="price">
   <p className="old-price"> {product.oldPrice === "null" ? '' : product.oldPrice}</p>
   R$ {product.price}
     </div>
    <h3>{product.colors} cores</h3>
   </div>
   </div>
            ))}</div>
        </div>
    )

    
}


export default Banner
