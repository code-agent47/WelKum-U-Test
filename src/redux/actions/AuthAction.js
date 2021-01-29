import {AUTH_REQUEST,AUTH_USER,AUTH_FAILED} from '../constants';
import axios from '../../axios';
import {history} from '../../helpers/History';
import {alertActions} from './AlertActions';
import Cookies from 'js-cookie';


export const signIn = (credentials) => {
  return (dispatch) => {
      dispatch({ type: AUTH_REQUEST });
      dispatch(alertActions.clear());
      return axios
          .post(`/ProfileManagement/LoginUser`, credentials)
          .then((response) => {
              console.log("response", response)
              if (response.status === 200) {
                  dispatch({
                      type: AUTH_USER,
                      response: response.data.result,
                  });
                  sessionStorage.setItem("userEmail",response.data.result.authToken);
                  Cookies.set('userEmail',response.data.result.authToken,{ expires: 7 });
                  history.replace('/my-listings');
              } else {
                  dispatch({
                      type: AUTH_FAILED,
                  });
                  dispatch(alertActions.error(response.data.message));
              }
          })
          .catch((error) => {
              if(!error.response){
                dispatch({
                    type: AUTH_FAILED
                });
                dispatch(alertActions.error("Network Error, try again!!!"));
              }
              else{
                dispatch({
                    type: AUTH_FAILED
                });
                dispatch(alertActions.error(error.response.data.message));
              }
          });
  };
};
