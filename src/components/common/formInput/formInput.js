import React from 'react';
import './formInput.css';

const FormInput = ({handleChange,label,...otherProps}) => (
    <div className="group">
        <input onChange={handleChange} {...otherProps} className="form-input"></input>
        {
        label
            ?(<label  className={`${otherProps.value?'shrink':''} form-input-label`}>{label}</label>)
            :null
        }
    </div>
)

export default FormInput;