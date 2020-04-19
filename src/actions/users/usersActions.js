import events from "../../api/events";

export const fetchUsers = () => async dispatch => {
    const response = await events.get(`/users`);
    dispatch({type: 'FETCH_USERS', payload: response.data});
};

export const fetchUser = id => async dispatch => {
    const response = await events.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};