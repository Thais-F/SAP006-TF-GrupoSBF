import React from 'react'
import Black from '../../assets/images/Black.png';
import './Footer.css';

export const Footer = () => {
    return (
        <div className="container-footer">
            <footer className="footer">
                <img src={Black} className='logo-img-black' alt='logo-black' />
            </footer>
        </div>
        
    )
}
