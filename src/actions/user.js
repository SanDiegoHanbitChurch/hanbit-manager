import firebase from '../firebase';

const db = firebase.firestore();
const usersRef = db.collection("user");

const getUser = (email) => {

    const query = usersRef.where("email", "==", email);

    return new Promise((resolve, reject) => {
        query.get()
            .then(querySnapshot => {
                if (querySnapshot.empty) {
                    return reject('user not found');
                }

                resolve(querySnapshot.docs[0].data());
            })
            .catch(reject);
    })
}

const deleteUser = (user) => {
    console.log('deleting user', user);
    db.collection("user").doc(user.id).delete()
        .then(() => console.log('delete user'));
  };

const updateUser = (user) => {

    const {id, name, email, role, chowon, mokjang } = user;
    const userToSave = {
        id,
        name,
        email,
        role
    }

    if (chowon) {
        userToSave.chowon = chowon;
    }
    if (mokjang) {
        userToSave.mokjang = mokjang;
    }

    if (role === '담임목사') {
        delete userToSave.chowon;
        delete userToSave.mokjang;
    }

    if (role === '초원장') {
        delete userToSave.mokjang;
    }
    if (role === '목자') {
        delete userToSave.chowon;
    }

    db.collection("user").doc(user.id).update(userToSave)
        .then(doc => console.log('updated', doc));
};

export {
    deleteUser,
    updateUser,
    getUser
}