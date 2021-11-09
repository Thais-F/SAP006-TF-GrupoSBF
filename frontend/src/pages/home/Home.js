import {React, useEffect, useState} from 'react'
import { getPromotions } from '../../services'

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
            <div>{promotions.map((product) => (
                <h1>{product.name}</h1>
            ))}</div>
           
        </div>

        

        
    )

    
}

export default Home
