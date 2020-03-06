import visitorDAL from './dataAccess/visitor';
import { concat } from 'lodash';

const getAll = () => visitorDAL.getAll();

const addVisitor = (visitorData) => {
    const { koreanName, englishName, email, phoneNumber, members } = visitorData;
    const firstMember = {
        koreanName,
        englishName,
        email,
        phoneNumber
    }

    const visitor = {
        visitDate: new Date().toLocaleDateString(),
        members: concat([firstMember], members)
    }

    return visitorDAL.add(visitor);
}

export {
    addVisitor,
    getAll
}