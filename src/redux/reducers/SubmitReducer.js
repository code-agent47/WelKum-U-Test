import {SUBMIT_SAVE} from '../constants';

const initialState = {
    results: null
}

const submitReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_SAVE:
      return Object.assign({}, state, {
        results: action.data
      })
      default:
        return state;
    }
}
  
export default submitReducer;