import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import MessageCreator from './messageCreator';
// import { sendToAllMembers } from '../../../actions/mail';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MessageContainer = ({ user }) => {

    const sendToAllMembers = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), 2000);
        })
    }

    const [messageSent, setMessageSent] = useState(false);
    const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
    const [openFailureAlert, setOpenFailureAlert] = useState(false);

    const handleSendMessage = (message) => {
        sendToAllMembers(message)
            .then(() => {
                setMessageSent(true);
                setOpenSuccessAlert(true);
                setMessageSent(false);
            })
            .catch(error => {
                console.log(error);
                setOpenFailureAlert(true);
            })
    }

    const { email, name } = user;

    return (
        <>
            { messageSent ? null : <MessageCreator email={email} name={name} sendMessage={handleSendMessage}/> }
            <Snackbar open={openSuccessAlert} autoHideDuration={2000} onClose={() => setOpenSuccessAlert(false)}>
                <Alert onClose={() => setOpenSuccessAlert(false)} severity="success">
                    Your message will be sent shortly.
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
