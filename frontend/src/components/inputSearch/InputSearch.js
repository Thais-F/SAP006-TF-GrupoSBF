import React from 'react';
import './index.css';

function Input({
    value,
    type,
    className,
    name,
    placeholder,
    onChange,
}) {
    return (
        <input
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
        />
    )
}

export default Input;

