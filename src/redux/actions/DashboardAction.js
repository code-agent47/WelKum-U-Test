import {FETCH_REQUEST,FETCH_SUCCESSFUL,FETCH_FAILED} from '../constants';
import axios from '../../axios';
import {alertActions} from './AlertActions';

export const DashboardActionsGET = (url) => {
  return (dispatch) => {
      dispatch({ type: FETCH_REQUEST });
      return axios
          .get(url)
          .then((response) => {
              console.log(response)
              if (response.data.status === 5) {
                  dispatch({
                      type: FETCH_SUCCESSFUL,
                      response: response.data.result,
                  });
              } else {
                  dispatch({
                      type: FETCH_FAILED,
                  });
                  dispatch(alertActions.error(response.data));                  
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
              dispatch(alertActions.error(error.response.data));
            }
        });
  };
};

export const FetchUniversities = (url) => {
    return (dispatch) => {
        dispatch({ type: FETCH_REQUEST });
        return axios
            .get(url)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    dispatch({
                        type: FETCH_SUCCESSFUL,
                        response: response.data.universities,
                    });
                } else {
                    dispatch({
                        type: FETCH_FAILED,
                    });
                    dispatch(alertActions.error(response.data));                  
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
                dispatch(alertActions.error(error.response.data));
              }
          });
    };
  };