import events from "../../api/events";

export const fetchEvents = () => async dispatch => {
    const response = await events.get('/events');

    dispatch({ type: 'FETCH_EVENTS', payload: response.data });
};