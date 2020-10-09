import firestoreDAL from './firestoreDAL';

const familyDAL = firestoreDAL('family');

const getFamiliesByMokjang = async (mokjang) => {
    const field = 'mokjang';
    const operator = '==';
    const value = mokjang;

    return await familyDAL.search(field, operator, value);
}

const addNewFamilyToMokjang = async (mokjang) => {

    return await familyDAL.add({
        mokjang,
        address: '',
        members: [
            {
                koreanName: '새가족'
            }
        ],
        membershipStatus: 'registered'
    })
}

export {
    getFamiliesByMokjang,
    addNewFamilyToMokjang
}

export default familyDAL;
