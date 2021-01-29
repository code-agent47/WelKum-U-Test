import React from 'react';
import TextStyle from './TextStyle';

const Text = ({
    value,
    className,
    useStyle
}) => {
    return (
        <>
           { (useStyle === undefined) ? (
                <TextStyle className={className}>
                    {value}
                </TextStyle>
           ) : 
                <p className={className}>
                    {value}
                </p>
           }
            
        </>
    );
};

export default Text;