import React from 'react';
import { IoMdCart } from 'react-icons/io'
import logo from '../../assets/images/centauro.png';
import Input from '../inputSearch/InputSearch';
import './index.css';

const Header = () => {
    return (
        <header className="header">
            <div className="principal">

                <button type='button' className='btn-logo'>
                    <img src={logo} className='logo-img' alt='logo' />
                </button>

                <Input
                    type='text'
                    className='inputSearch'
                    name='inputHeader'
                    placeholder='Busque por produtos, esportes, marcas ou times'
                />

                <button type='button' className='btn-cart'
                    onClick={() => alert('botão ok, aqui vai pegar a rota')}
                >< IoMdCart /></button>

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
        </header>
    )
}

export default Header;

