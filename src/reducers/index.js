import {combineReducers} from 'redux';
import usersReducer from './usersReducer';
import eventsReducer from "./eventsReducer";
import authReducer from "./authReducer";

export default combineReducers({
    auth: authReducer,
    events: eventsReducer,
    users: usersReducer
});