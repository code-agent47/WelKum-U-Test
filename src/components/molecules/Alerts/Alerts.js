import React from 'react';
import AlertStyles from './AlertStyles';
import Text from '../../atoms/Text/Text';

const Alert = ({ text, alertType = '' }) => {
    return(
        <AlertStyles> 
            <div className={`alert ${alertType}`}> 
                <Text value={text} />
            </div> 
        </AlertStyles>
    ) 
};

export default Alert;