import axios from 'axios'

export default axios.create({
    baseURL: 'https://sso-authorization.herokuapp.com',
    timeout: 10000,
    crossdomain: true,
    headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
});