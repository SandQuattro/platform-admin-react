import _ from 'lodash';
import {fetchEvents} from "./events/eventsActions";
import {fetchUser} from "./users/usersActions";

export const fetchEventsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchEvents());

    _.chain(getState().Events)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};