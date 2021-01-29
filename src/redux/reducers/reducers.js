import { combineReducers } from 'redux';
import alertReducer from './AlertReducer'
import signinReducer from './AuthReducer';
import dashboardReducer from './DashboardReducer';
import submitReducer from './SubmitReducer';

export default combineReducers({
    alertReducer,
    signinReducer,
    dashboardReducer,
    submitReducer
})