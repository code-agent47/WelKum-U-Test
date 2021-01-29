import {ALERT_SUCCESS,ALERT_FAILED,ALERT_CLEAR} from '../constants';

export const alertActions = {
    success,
    error,
    clear,
};

function success(message) {
    return { type: ALERT_SUCCESS, message };
}

function error(message) {
    return { type: ALERT_FAILED, message };
}

function clear() {
    return { type: ALERT_CLEAR};
}