import React from 'react';
import './button.css';

export const Button = ({children,...otherProps})=>{
    return(
    <button className="custom-button" {...otherProps} >{children}</button>
    )
}