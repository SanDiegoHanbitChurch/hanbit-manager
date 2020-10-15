import firebase from '../firebase';
import errorDAL from './dataAccess/error';

const logError = async (error, errorInfo) => {

    await errorDAL.add({
        message: error.message,
        stack: error.stack,
        errorInfo,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date())
    });
};

export {
    logError
}
