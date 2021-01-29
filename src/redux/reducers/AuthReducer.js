import {AUTH_REQUEST, AUTH_FAILED, AUTH_USER} from '../constants.js';

const initialState = {
    fetching: false,
    results: null
}

const signinReducer = (state = initialState, action) => {
    switch (action.type) {
      case AUTH_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
        results: null 
      })
      case AUTH_FAILED:
      return Object.assign({}, state, {
        fetching: false,
        results: null
      });
      case AUTH_USER:
      return Object.assign({}, state, {
        fetching: false,
        results: action.response
      });
      default:
        return state;
    }
}
  
export default signinReducer;
  