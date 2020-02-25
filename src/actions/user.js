import userDAL from './dataAccess/user'

const getUser = (email) => userDAL.search('email', '==', 'email');
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
    deleteUser,
    updateUser,
    getUser
}