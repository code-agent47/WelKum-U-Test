import React from 'react';
import { ButtonStyle } from './ButtonStyle';
import LoadSpinner from '../Loader/Loader';

const Button = ({
    type,
    id = '',
    value,
    useStyle,
    onClick,
    className = '',
    isLoading = false,
    loaderColor = '#fff',
    disabled = false,
    ...rest
}) => {
    return (
        <>
           { (useStyle === undefined) ? (
               <ButtonStyle
               id={id}
               type={type}
               onClick={onClick}
               className={className}
               disabled={isLoading || disabled}
               {...rest}
           >
               {isLoading ? (
                   <LoadSpinner color={loaderColor} height={20} width={20} />
               ) : (
                   value
               )}
           </ButtonStyle>
           ) : 
           <button
                id={id}
                type={type}
                onClick={onClick}
                className={className}
                disabled={isLoading || disabled}
                {...rest}
            >
                {isLoading ? (
                    <LoadSpinner color={loaderColor} height={20} width={20} />
                ) : (
                    value
                )}
            </button>           
           }
            
        </>
    );
};

export default Button;