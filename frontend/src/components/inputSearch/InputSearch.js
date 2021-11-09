import React from 'react';
import {BsSearch} from 'react-icons/bs';
import './index.css';

function Input({ placeholder, name, className, value, onChange }) {

function handleChange(event){
    onChange(event.target.value);
}


    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type='text'
                    placeholder={placeholder}
                    name={name}
                    className={className}
                    value={value}
                    onChange={handleChange}
                />
                <div className='searchIcon'><BsSearch/></div>
            </div>
            <div className='dataResult'></div>

        </div>
    )
}

export default Input;




/*function Input({
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
 */
// export default Input;

