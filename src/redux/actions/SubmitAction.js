import {SUBMIT_INFO, SUBMIT_PROVINCE} from '../constants';

export const saveInfo = (data) => {
  return (dispatch) => {
      dispatch({ type: SUBMIT_INFO, data });
  };
};

export const saveProvince = (data) => {
  return (dispatch) => {
      dispatch({ type: SUBMIT_PROVINCE, data });
  };
};

