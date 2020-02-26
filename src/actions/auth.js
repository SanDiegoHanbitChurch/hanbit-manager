import firebase from '../firebase';
import { getUserByEmail } from './user';

const provider = new firebase.auth.GoogleAuthProvider();

const isSdhanbitUser = (user) => user.email.endsWith('@sdhanbit.org');

const login = () => {
    let googleUser = firebase.auth().currentUser;
    if (googleUser) {
        if (isSdhanbitUser(googleUser)) {
            return getUserByEmail(googleUser.email);
        }

        return Promise.reject('Only users with sdhanbit.org account is allowed.');
    }

    return new Promise((resolve, reject) => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                googleUser = result.user;
                if (isSdhanbitUser(googleUser)) {
                    return getUserByEmail(googleUser.email);
                }
        
                reject('Only users with sdhanbit.org account is allowed.');
            })
            .catch(error => reject(error.message))
    });
}

const logout = () => firebase.auth().signOut();

export {
    login,
    logout
}