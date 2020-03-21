import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import MessageCreator from './messageCreator';
import { get, concat } from 'lodash';
import { sendMessage } from '../../../actions/message';
import { getAll as fetchFamilyList } from '../../../actions/family';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MessageContainer = ({ user }) => {

    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    const [openFailureAlert, setOpenFailureAlert] = useState(false);

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
            .then(() => {
                setOpenSuccessAlert(true);
            })
            .catch(error => {
                console.log(error);
                setOpenFailureAlert(true);
            })
    }

    const { email, name } = user;

    return (
        <>
            { 
                status === 'loading'
                    ? <CircularProgress />
                    : <MessageCreator email={email} name={name} sendMessage={handleSendMessage}/>
            }
            <Snackbar open={openSuccessAlert} autoHideDuration={2000} onClose={() => setOpenSuccessAlert(false)}>
                <Alert onClose={() => setOpenSuccessAlert(false)} severity="success">
                    Your message was successfully sent!
                </Alert>
            </Snackbar>
            <Snackbar open={openFailureAlert} autoHideDuration={5000} onClose={() => setOpenFailureAlert(false)}>
                <Alert onClose={() => setOpenSuccessAlert(false)} severity="error">
                    Failed to send the message. Please contact sang.yum@sdhanbit.org
                </Alert>
            </Snackbar>
        </>
    )
}

export default MessageContainer;
