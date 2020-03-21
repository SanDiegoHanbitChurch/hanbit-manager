import React from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@material-ui/core';
import MessageCreator from './messageCreator';
import { get, concat } from 'lodash';
import { sendMessage } from '../../../actions/message';
import { getAll as fetchFamilyList } from '../../../actions/family';

const MessageContainer = ({ user }) => {

    let emailList = [];
    const { status, data } = useQuery('familyList', fetchFamilyList);
    
    if (status === 'success') {
        emailList = data.reduce((prev, curr) => {
            const members = get(curr, 'members', []);
            const memberEmails = members
                .filter(member => member.email.trim())
                .map(member => member.email)
            prev = concat(prev, memberEmails);

            return prev;
        }, []);
    }

    const handleSendMessage = (message) => {
        sendMessage({
            to: emailList,
            ...message
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const { email } = user;

    return status === 'loading'
        ? <CircularProgress />
        : <MessageCreator senderEmail={email} sendMessage={handleSendMessage} />
    
}

export default MessageContainer;
