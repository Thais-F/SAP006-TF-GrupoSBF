
import React from 'react';
import Promotions from '../../components/banner/Promotions';
import PromoMobile from '../../components/banner/PromoMobile';
import './home.css';


const Home = () => {
    return (
        <div>
        <h1 className="titulo"> Promoções em destaque </h1>

        <div className="home">
        <div>
        <PromoMobile/>
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
