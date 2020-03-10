import firebase from '../firebase';
import visitorDAL from './dataAccess/visitor';
import { visitorIndex } from './search';

const getVisitorById = (id) => visitorDAL.getById(id);
const saveVisitor = ({id, visitDate, service ='', members = [], notes = []}) => {
    const visitorToSave = {
        id,
        service,
        members,
        notes
    };
    if (visitDate) {
        if (typeof visitDate === 'object') {
            visitorToSave.visitDate = visitDate.toLocaleDateString();
        } else {
            visitorToSave.visitDate = visitDate;
        }
    }

    return visitorDAL.update(visitorToSave);
};

const searchVisitor = (query) => {
    firebase.analytics().logEvent('search', { query });
    return new Promise((resolve, reject) => {
        visitorIndex.search(query)
            .then(({hits}) => {
                const data = hits.map(({objectID, ...rest}) => ({id: objectID, ...rest}));
                resolve(data);
            })
            .catch(reject);
    })
}

const getAll = () => visitorDAL.getAll()
const addVisitor = ({visitDate, service ='', members = [], notes = []}) => {
    const visitorToSave = {
        service,
        members,
        notes
    };
    if (visitDate) {
        visitorToSave.visitDate = firebase.firestore.Timestamp.fromDate(visitDate);
    }

    return visitorDAL.add(visitorToSave);
};

export {
    getVisitorById,
    saveVisitor,
    addVisitor,
    getAll,
    searchVisitor
}