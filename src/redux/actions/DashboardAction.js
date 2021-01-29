import {FETCH_REQUEST,FETCH_SUCCESSFUL,FETCH_FAILED,FETCH_CLEAR} from '../constants';
import axios from '../../axios';
import {alertActions} from './AlertActions';
import {history} from '../../helpers/History';
import Cookies from 'js-cookie';

export const DashboardActions = (url) => {
  return (dispatch) => {
      dispatch({ type: FETCH_REQUEST });
      return axios
          .get(url)
          .then((response) => {
              if (response.data.error === false) {
                  dispatch({
                      type: FETCH_SUCCESSFUL,
                      response: response.data,
                  });
              } else {
                  dispatch({
                      type: FETCH_FAILED,
                  });
                  dispatch(alertActions.error(response.data.message));                  
              }
          })
          .catch((error) => {
            if(!error.response){
              dispatch({
                  type: FETCH_FAILED
              });
              dispatch(alertActions.error("Network Error, try again!!!"));
            }
            else{
              dispatch({
                  type: FETCH_FAILED
              });
              dispatch(alertActions.error(error.response.data.message));
              if(error.response.data.message === "UNAUTHORIZED."){
                    sessionStorage.removeItem("userEmail");
                    Cookies.remove("userEmail");
                    history.replace('/');
              }
            }
        });
  };
};

export const DashboardActionsPOST = (url,value) => {
    return (dispatch) => {
        dispatch({ type: FETCH_REQUEST });
        return axios
            .post(url,value)
            .then((response) => {
                if (response.data.error === false) {
                    dispatch({
                        type: FETCH_SUCCESSFUL,
                        response: response.data,
                    });
                } else {
                    dispatch({
                        type: FETCH_FAILED,
                    });
                    dispatch(alertActions.error(response.data.message));
                }
            })
            .catch((error) => {
              if(!error.response){
                dispatch({
                    type: FETCH_FAILED
                });
                dispatch(alertActions.error("Network Error, try again!!!"));
              }
              else{
                dispatch({
                    type: FETCH_FAILED
                });
                dispatch(alertActions.error(error.response.data.message));
                if(error.response.data.message === "UNAUTHORIZED."){
                    sessionStorage.removeItem("userEmail");
                    Cookies.remove("userEmail");
                    history.replace('/');
                }
              }
          });
    };
  };

export const DashboardReducerClear = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CLEAR });
    }
}