import sso from "../../api/sso-auth";
import {CREATE_USER, DELETE_USER, FETCH_USER, FETCH_USERS, UPDATE_USER} from "../types";

export const fetchUsers = () => async dispatch => {
    const response = await sso.get(`/users`);

    dispatch({type: FETCH_USERS, payload: response.data.data});
};

export const fetchUser = id => async dispatch => {
    const response = await sso.get(`/users/id/${id}`);

    dispatch({type: FETCH_USER, payload: response.data});
};

// export const createUser = (userId, formValues) => {
//   return async dispatch => {
//   }
// }
// это одно и то же
export const createUser = (id, formValues) => async dispatch => {
    const response = await sso.post(`/users/${id}`, formValues)

    dispatch({type: CREATE_USER, payload: response.data});
}

export const updateUser = (id, formValues) => async dispatch => {
    const response = await sso.put(`/users/${id}`, formValues)

    dispatch({type: UPDATE_USER, payload: response.data});
}

export const deleteUser = (id) => async dispatch => {
    await sso.put(`/users/${id}`)

    dispatch({type: DELETE_USER, payload: id});
}