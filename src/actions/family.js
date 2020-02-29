import firebase from '../firebase';
import familyDAL from './dataAccess/family';
import { familyIndex } from './search';

const updateFamily = (family) => familyDAL.update(family);
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

export {
    updateFamily,
    searchFamily,
    addNote
};
