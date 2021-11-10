import React from 'react';
import promo from '../../assets/images/promo-mobile.png';
import './promotions.css';


const PromoMobile = () => {
  return (
    <div>
       <img src={promo} className='promo-image' alt='promo' />
    </div>
  )
}

export default PromoMobile
