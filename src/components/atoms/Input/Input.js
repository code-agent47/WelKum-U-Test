import React from 'react';
import InputStyle from './InputStyle';

const Input = ({
    value,
    type,
    id,
    onChange,
    onFocus,
    onKeyPress,
    className,
    name,
    placeholder,
    useStyle,
    required
}) => {
    return (
        <>
           { (useStyle === undefined) ? (
                <InputStyle type={type} id={id} className={className} value={value} name={name} onChange={onChange} onFocus={onFocus} placeholder={placeholder} onKeyPress={onKeyPress} required={required}>
                    
                </InputStyle>
           ) : 
                <input type={type} id={id} className={className} value={value} name={name} onChange={onChange} placeholder={placeholder} onKeyPress={onKeyPress} required={required}/>
           }
            
        </>
    );
};

export default Input;