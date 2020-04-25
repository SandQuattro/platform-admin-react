import {GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT, SIGN_IN} from '../actions/types';

const INTIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userLogo: null
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload.claims.uid, userLogo: action.payload.userLogo };
        case GOOGLE_SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload.userId, userLogo: action.payload.userLogo };
        case GOOGLE_SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null, userLogo: null };
        default:
            return state;
    }
};
