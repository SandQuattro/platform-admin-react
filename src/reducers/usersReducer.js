import _ from 'lodash'
import {CREATE_USER, DELETE_USER, FETCH_USER, FETCH_USERS, UPDATE_USER} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_USER:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_USER:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE_USER:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_USER:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}