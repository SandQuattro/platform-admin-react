import axios from 'axios'

export default axios.create({
    baseURL: 'https://events-microservice.herokuapp.com',
    timeout: 10000
});