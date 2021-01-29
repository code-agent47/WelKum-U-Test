import {SUBMIT_SAVE} from '../constants';

export const saveInfo = (data) => {
  return (dispatch) => {
      dispatch({ type: SUBMIT_SAVE, data });
  };
};

