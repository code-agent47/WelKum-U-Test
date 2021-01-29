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
                <h2 className={className}>
                    {value}
                </h2>
           }
            
        </>
    );
};

export default Text;