import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={['btn', props.className].join(' ')}>centauro
    </button>
  ) 
  
}
export default Button;