import firebase from '../firebase';
import visitorDAL from './dataAccess/visitor';

const getVisitorById = (id) => visitorDAL.getById(id);
const saveVisitor = ({id, visitDate, service ='', members = [], notes = [], prayers = []}) => { //Added_Prayer
    const visitorToSave = {
        id,
        service,
        members,
        notes,
        prayers //Added_Prayer
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

const getAll = () => visitorDAL.getAll()
const addVisitor = ({visitDate, service ='', members = [], notes = [], prayers = []}) => { //Added_Prayer
    const visitorToSave = {
        service,
        members,
        notes,
        prayers //Added_Prayer
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
    getAll
}