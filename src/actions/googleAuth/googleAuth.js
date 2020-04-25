import {SIGN_IN, SIGN_OUT} from '../types.js'

export const googleSignIn = (userId, userLogo) => {
    return {
        type: SIGN_IN,
        payload: {userId, userLogo}
    };
};

export const googleSignOut = () => {
    return {
        type: SIGN_OUT
    };
};
