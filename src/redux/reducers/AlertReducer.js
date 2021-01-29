import {ALERT_SUCCESS,ALERT_FAILED,ALERT_CLEAR} from '../constants';

const alertReducer = (state = {}, action) => {
    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                type: 'alert-success',
                message: action.message,
            };
        case ALERT_FAILED:
            return {
                type: 'alert-danger',
                message: action.message,
            };
        case ALERT_CLEAR:
            return {};
        default:
            return state;
    }
};

export default alertReducer;