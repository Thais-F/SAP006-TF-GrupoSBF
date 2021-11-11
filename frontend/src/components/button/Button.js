import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} id={props.id} className={['button', props.className].join(' ')}>
      {props.children}
    </button>
  ) 
  
}
export default Button;