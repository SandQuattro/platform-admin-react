import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import eventsReducer from "./eventsReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    events: eventsReducer,
    users: usersReducer
});