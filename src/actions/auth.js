import {SIGN_IN, SIGN_OUT} from "./types";
import {INITIAL_STATE} from "../reducers/authReducer";
import history from '../utils/history'

export const signIn = (data) => dispatch => {
    dispatch( {type: SIGN_IN, payload: data} );
    history.push('/users');
}

export const signOut = () => {
    localStorage.removeItem('token');

    return {
        type: SIGN_OUT,
        payload: INITIAL_STATE
    };
};