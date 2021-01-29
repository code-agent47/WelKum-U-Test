import {SUBMIT_INFO, SUBMIT_PROVINCE} from '../constants';

const initialState = {
    results: {
      info:{

      },
      provinceData:{
        province: '',
        city: ''
      }
    }
}

const submitReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_INFO:
      return Object.assign({}, state, {
        results: {
            ...state.results,
            info: action.data
        }
      })
      case SUBMIT_PROVINCE:
      return Object.assign({}, state, {
        results: {
            ...state.results,
            provinceData: action.data
        }
      })
      default:
        return state;
    }
}
  
export default submitReducer;