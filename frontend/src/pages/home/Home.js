import {React, useEffect, useState} from 'react'
import { getPromotions } from '../../services'
import { Footer } from '../../components/footer/Footer';

//página de promoções

const Home = () => {

  const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        async function getPromos() {
            const products = await getPromotions()
            setPromotions(products)
            console.log(products)
            return products
        }
        getPromos()        
      }, []);

      
    
    return (
        <div>
            <h1>Home</h1>
            <div>
                {promotions.map((product) => (
                    <p>{product.name}</p>
                ))}
            </div>
            <Footer/>
        </div>

        

        
    )

    
}

export default Home
