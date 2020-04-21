import {SIGN_IN, SIGN_OUT} from '../types.js'

export const signIn = (userId, userLogo) => {
    return {
        type: SIGN_IN,
        payload: {userId, userLogo}
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
