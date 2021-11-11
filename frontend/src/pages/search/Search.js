import React, { useState } from 'react'
import Product from '../../components/product/Product'
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';


//exibir as buscas do usuário
const Search = () => {
    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
    // const [text, setText] = useState('');
    const text = localStorage.getItem('searchValue')
    console.log(text)


    if (text) {
        fetch(`http://localhost:3000/search?q=${text}&sort=relevance`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                setProducts(response);
                localStorage.removeItem('searchValue');

            })
    }

    return (
        <div>

            {<div className="grid-container">
                {products.map((item) => (
                    <ul >
                        <li key={item.id} className="card">
                            <p className="discount"> {item.discount === "null" ? '' : item.discount}</p>
                            <img className="img" src={item.image} alt={item.name} />
                            <p className="shipping">
                                {item.freeShipping === "true" ? '' : (<p>Frete Grátis</p>)}</p>
                            <div className="card-body">
                                <h2>{item.name}</h2>
                                <div className="price">
                                    <p className="old-price"> {item.oldPrice === "null" ? '' : item.oldPrice}</p>
                                    R$ {item.price}
                                </div>
                                {/* <Rating/> */}
                                {<h3>{item.colors} cores</h3>}
                        </div>
                        </li>
                    </ul>
                ))}</div>}

        </div>
    )
}

export default Search
