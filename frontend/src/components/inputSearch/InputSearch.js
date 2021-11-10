 import React from 'react';
import './index.css';

function Input({ placeholder, name, className, value, onChange }) {

    return (
        <div className='search'>
            <div className='searchInputs'>
                <input type='text'
                    placeholder={placeholder}
                    name={name}
                    className={className}
                    value={value}
                    onChange={(e)=> localStorage.setItem('searchValue', e.target.value)}
                />

            </div>
        
        </div>
    )
}

export default Input; 

/*
 import React from 'react';
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

            </div>
            <div className='dataResult'></div>

        </div>
    )
}

export default Input; 
*/