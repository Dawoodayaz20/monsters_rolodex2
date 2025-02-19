import React from 'react'

import './search-box-styles.css'

//This is a functional component. It only get props and returns some html.
export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input 
            type='search' 
            placeholder={placeholder}
            onChange={handleChange}
            className='search'
        />
    );
}