import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const LoadSpinner = ({
    type = 'Oval',
    color = '#0C3B4D',
    height = 30,
    width = 30,
}) => {
    return <Loader type={type} color={color} height={height} width={width} />;
};

export default LoadSpinner;