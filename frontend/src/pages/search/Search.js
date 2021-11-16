import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { BsSearch } from 'react-icons/bs';
import Rating from '../../components/product/Rating';
import Button from '../../components/button/Button';

const Search = () => {
    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
    // const [text, setText] = useState('');
    const text = localStorage.getItem('searchValue');

    const adcCarrinho = (event) => {
        const newProduct = products.filter((item) => item.id === event.target.id)
        newProduct[0].quantity = 1
        const carrinho = JSON.parse(localStorage.getItem('produtosDoCarrinho'))

        if (carrinho === null) {
            localStorage.setItem('produtosDoCarrinho', JSON.stringify(newProduct))
        } else {
            const carrinhoAtualizado = [...carrinho, newProduct[0]]
            localStorage.removeItem('produtosDoCarrinho')
            localStorage.setItem('produtosDoCarrinho', JSON.stringify(carrinhoAtualizado))
        }
    }

    if (text) {
        fetch(`http://localhost:3000/search?q=${text}&sort=relevance`)
            .then((response) => response.json())
            .then((response) => {
                setProducts(response);
                localStorage.removeItem('searchValue');

            })
    }

    return (
        
            <div className="gridcontainer">
                {products.map((items) => (
                    <div key={items.id} className="card">
                        <div>
                            {items.discount === "null" ? '' : <p className="discount"> {items.discount}%</p>}
                            <img className="pic" src={items.image} alt={items.name} />
                        </div>
                        <div>
                            <p className="shipping"> {items.freeShipping === "true" ? '' : (<p className='frete'>Frete Grátis</p>)}</p>
                        </div>
                        <h2 className="itemname">{items.name}</h2>
                        <p className="price">
                            R$ {items.price}
                        </p>
                        <p className="old-price"> {items.oldPrice === "null" ? '' : items.oldPrice}</p>
                        <Rating items={items} />
                        <h3>{items.colors} cores</h3>
                        <Button
                            id={items.id}
                            onClick={(event) => adcCarrinho(event)}
                        > Adicionar ao Carrinho
                        </Button>
                    </div>
                ))}
            </div>
    )
}

export default Search
