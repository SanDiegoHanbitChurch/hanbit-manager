import userDAL from './dataAccess/user'

const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        userDAL.search('email', '==', email)
            .then(users => {
                if (users.length === 0) {
                    return reject('user not found')
                }

                resolve(users[0]);
            })
            .catch(reject);
    })
    
};
const addUser = (user) => {

    const { name, email, role, mokjang, chowon } = user;

    if (name && email && role) {
        userDAL.add({
            name,
            email,
            role,
            mokjang: mokjang ? mokjang : '',
            chowon: chowon ? chowon : ''
        })
    }

    // TODO: Nedd to perform additonal validation based on roles.
}
const deleteUser = (user) => userDAL.remove(user);
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

    return userDAL.update(userToSave);
};

export {
    addUser,
    deleteUser,
    updateUser,
    getUserByEmail
}