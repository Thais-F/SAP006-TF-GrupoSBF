import React from 'react';
import { IoMdCart } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import logo from '../../assets/images/centauro.png';
import Input from '../inputSearch/InputSearch';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/busca')
    }

    function handleCart() {
        navigate('/carrinho')
    }

    function navigateHome() {
        navigate('/')
    }

    return (
        <header className="header">
            <div className="principal">

                <button type='button' className='btn-logo'>
                    <img src={logo} className='logo-img' alt='logo'
                        onClick={navigateHome}
                    />
                </button>

                <button type='button' className='btn2-cart'
                    onClick={handleCart}
                >< IoMdCart />
                </button>

                <div className='searchInputs'>
                    <Input
                        type='text'
                        id='teste'
                        className='inputSearch'
                        name='inputHeader'
                        placeholder='Buscar por produtos'
                    />

                    <button className='searchIcon'
                        onClick={handleClick}
                    ><FaSearch /></button>
                </div>

                <button type='button' className='btn-cart'
                    onClick={handleCart}
                >< IoMdCart />
                </button>

            </div>

            <div className="secondary">
                <div className='btns-header'>
                    <button type="button" className='btn-nav' >Esportes</button>
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


        </header>
    )
}

export default Header;

