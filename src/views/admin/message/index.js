import React from 'react';
import MessageCreator from './messageCreator';
import { sendMessage } from '../../../actions/message';

const Message = ({ user }) => {

    

    const handleSendMessage = (message) => {
        sendMessage(message)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const { email } = user;

    return (
        <MessageCreator senderEmail={email} sendMessage={handleSendMessage} />
    )
}

export default Message;
