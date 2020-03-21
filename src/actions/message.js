import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_FUNCTIONS_BASEURL
})

const sendMessage = ({from, subject, content}) => {
    return instance.post('/sendEmail', {
        from,
        subject,
        content
    });
}

export {
    sendMessage
}