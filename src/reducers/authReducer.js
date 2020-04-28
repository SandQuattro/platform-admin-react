import {GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT, SIGN_IN, SIGN_OUT} from '../actions/types';

export const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userLogo: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload.claims.uid,
                userLogo: action.payload.userLogo
            };
        case SIGN_OUT:
            return {...state, ...INITIAL_STATE};
        case GOOGLE_SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload.userId, userLogo: action.payload.userLogo};
        case GOOGLE_SIGN_OUT:
            return {...state, ...INITIAL_STATE};
        default:
            return state;
    }

};
