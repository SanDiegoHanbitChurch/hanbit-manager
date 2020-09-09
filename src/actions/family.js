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
const searchFamily = async (query) => {
    firebase.analytics().logEvent('search', { query });
    const { hits } = await familyIndex.search(query);

    return hits
        .filter(({ inactive = false }) => !inactive )
        .map(({objectID, ...rest}) => ({id: objectID, ...rest}));
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
const getAll = () => familyDAL.getAll()

export {
    updateFamily,
    searchFamily,
    addNote,
    getFamilyById,
    getAll
};
