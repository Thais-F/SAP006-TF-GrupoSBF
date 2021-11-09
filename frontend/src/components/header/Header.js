import React, { useState } from 'react';
import { IoMdCart } from 'react-icons/io'
import logo from '../../assets/images/centauro.png';
import Input from '../inputSearch/InputSearch';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
// import Product from '../product/Product';
import './index.css';

const Header = () => {


    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [text, setText] = useState('');

    function filter() {
        if (text) {
            fetch(`http://localhost:3000/search?q=${text}&sort=relevance`)
                .then((response) => response.json())
                .then((response) => {
                    console.log(response)
                    setProducts(response);
                })
        }
    }

    function handleClick() {
        navigate('/busca')
        filter()
    }

    return (
        <header className="header">
            <div className="principal">

                <button type='button' className='btn-logo'>
                    <img src={logo} className='logo-img' alt='logo' />
                </button>

                <div className='searchInputs'>
                    <Input
                        type='text'
                        className='inputSearch'
                        name='inputHeader'
                        placeholder='Busque por produtos, esportes, marcas ou times'
                        value={text}
                        onChange={(str) => setText(str)}
                    />

                    <button className='searchIcon'
                        onClick={handleClick}
                    ><BsSearch /></button>

                </div>


                <button type='button' className='btn-cart'
                    onClick={() => alert('botão ok, aqui vai pegar a rota')}
                >< IoMdCart />
                </button>

            </div>

            <div className="secondary">
                <div className='btns-header'>
                    <button type="button" className='btn-nav'>Esportes</button>
                    <button type="button" className='btn-nav'>Homens</button>
                    <button type="button" className='btn-nav'>Mulheres</button>
                    <button type="button" className='btn-nav'>Crianças</button>
                    <button type="button" className='btn-nav'>Calçados</button>
                    <button type="button" className='btn-nav'>Roupas</button>
                    <button type="button" className='btn-nav'>Acessórios</button>
                    <button type="button" className='btn-nav'>Equipamentos</button>
                    <button type="button" className='btn-nav'>Marcas</button>
                    <button type="button" className='btn-nav'>Suplementos</button>
                    <button type="button" className='btn-nav' id='outlet'>Outlet</button>
                </div>

            </div>

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
                            <h3>{item.colors} cores</h3>
                        </div>
                    </li>
                </ul>
            ))}

        </header>
    )
}

export default Header;
