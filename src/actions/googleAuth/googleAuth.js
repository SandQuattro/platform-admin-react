import {GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT} from '../types.js'

export const googleSignIn = (userId, userLogo) => {
    return {
        type: GOOGLE_SIGN_IN,
        payload: {isSignedIn:true, userId, userLogo}
    };
};

export const googleSignOut = () => {
    return {
        type: GOOGLE_SIGN_OUT
    };
};
