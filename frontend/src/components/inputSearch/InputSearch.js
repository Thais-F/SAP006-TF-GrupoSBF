import React from 'react';
import { useNavigate } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
// import { Link } from 'react-router-dom';
import './index.css';


function Input({ placeholder, name, className, value, onChange }) {

let navigate = useNavigate();
function handleClick(){
    navigate('/busca')
}

function handleChange(event){
    // <Link to="/search"></Link>
    onChange(event.target.value);
} 


/* function MyButton() {
    let navigate = useNavigate();
    function handleClick() {
    navigate('/home');
    };
    return <button onClick={handleClick}>Submit</button>;
    }; */

        
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

                <button className='searchIcon'
               onClick={handleClick} 
                ><BsSearch/></button>
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

