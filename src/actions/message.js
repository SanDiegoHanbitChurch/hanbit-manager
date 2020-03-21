import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_FUNCTIONS_BASEURL
})

const sendMessage = (message) => {
    const { name, email } = message;
    const from = `${name} <${email}>`
    
    return instance.post('/sendEmail', {
        ...message,
        from
    })
};

export {
    sendMessage
}