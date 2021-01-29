import {FETCH_REQUEST,FETCH_SUCCESSFUL,FETCH_FAILED, FETCH_CLEAR} from '../constants';

const initialState = {
    fetching: false,
    results: null
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CLEAR:
      return Object.assign({}, state, {
         results: null
      })
      case FETCH_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      })
      case FETCH_FAILED:
      return Object.assign({}, state, {
        fetching: false,
        results: null
      });
      case FETCH_SUCCESSFUL:
      return Object.assign({}, state, {
        fetching: false,
        results: action.response
      });
      default:
        return state;
    }
}
  
export default dashboardReducer;