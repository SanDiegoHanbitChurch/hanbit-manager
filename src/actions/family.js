import firebase from '../firebase';
import familyDAL from './dataAccess/family';
import { familyIndex } from './search';

const getFamilyById = (id) => familyDAL.getById(id);
const updateFamily = async (family) => {

    const { notes, ...rest } = family;
    const updatedNotes = notes.map(({ createdAt, createdBy, comment }) => {
        const updatedNote = {
            createdBy,
            comment,
            createdAt: typeof createdAt === 'string'
                ? firebase.firestore.Timestamp.fromDate(new Date(createdAt))
                : createdAt
        }

        return updatedNote;
    });

    return await familyDAL.update({
        ...rest,
        notes: updatedNotes
    });
};
const searchFamily = (query) => {
    firebase.analytics().logEvent('search', { query });
    return new Promise((resolve, reject) => {
        familyIndex.search(query)
            .then(({hits}) => {
                const data = hits.map(({objectID, ...rest}) => ({id: objectID, ...rest}));
                resolve(data);
            })
            .catch(reject);
    })
}

const addNote = (family, user, comment) => {
    const note = {
        createdBy: user,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        comment
    };
    if (family.notes) {
        family.notes.push(note)
    } else {
        family.notes = [note]
    }

    return updateFamily(family);
}

//Added_Prayer
const addPrayer = (family, user, comment) => {
    const prayer = {
        createdBy: user,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        comment
    };
    if (family.prayers) {
        family.prayers.push(prayer)
    } else {
        family.prayers = [prayer]
    }

    return updateFamily(family);
}
//Added_Prayer

const getAll = () => familyDAL.getAll()

export {
    updateFamily,
    searchFamily,
    addNote,
    addPrayer,
    getFamilyById,
    getAll
};
