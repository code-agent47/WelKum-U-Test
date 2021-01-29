/* eslint-disable no-shadow */
import React, {memo} from 'react';
import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component, ...rest }) => {
 return(
    <Route {...rest} render={(props) => {
        let sessionKey = sessionStorage.getItem("userEmail");
        let cookie = Cookies.get("userEmail");
        if( !sessionKey && !cookie ){
            return (
                <Redirect to='/' />
            )
        }
        else{
            return(
                React.createElement(component, props)
            )
        }
         
    }} />
 )
};

export default memo(PrivateRoute);
