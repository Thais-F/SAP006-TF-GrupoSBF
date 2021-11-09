import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} id={props.id} className={['btn', props.className].join(' ')}>
      
    </button>
  ) 
  
}
export default Button;