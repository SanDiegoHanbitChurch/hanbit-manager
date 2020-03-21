import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_FUNCTIONS_BASEURL
})

const sendMessage = (message) => instance.post('/sendEmail', message);

export {
    sendMessage
}