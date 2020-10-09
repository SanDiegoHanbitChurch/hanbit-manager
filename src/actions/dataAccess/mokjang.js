import firestoreDAL from './firestoreDAL';

const mokjangDAL = firestoreDAL('mokjang');

const getMokjangByName = async (mokjang) => {

    const field = 'name';
    const operator = '==';
    const value = mokjang;

    const searchResult = await mokjangDAL.search(field, operator, value);
    return searchResult[0];
}

export {
    getMokjangByName
}

export default mokjangDAL;
