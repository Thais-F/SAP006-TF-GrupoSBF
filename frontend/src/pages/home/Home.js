
import React from 'react';
import Promotions from '../../components/banner/Promotions';
import PromoMobile from '../../components/banner/PromoMobile';
import PromoDesktop from '../../components/banner/PromoDesktop';
import './home.css';


const Home = () => {
    return (
        <div>
           <PromoMobile />
            <PromoDesktop/>

        <p className="titulo"> Promoções em destaque </p>
        <div className="home">
        <div>
        
        <Promotions />
        </div>
        </div>
        </div>

    )
}

export default Home

/*   /* <Button
          id="submit-button"
          onClick={}
          name="Entrar"
          className="btn-login"
        />*/
