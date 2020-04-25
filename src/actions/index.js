import _ from 'lodash';
import {fetchEvents} from "./events/eventsActions";
import {fetchUser} from "./users/userActions";
import {SIGN_IN} from "./types";

export const signIn = () => dispatch => {
    dispatch( {type: SIGN_IN, payload: true} )
}

export const fetchEventsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchEvents());

    _.chain(getState().Events)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};