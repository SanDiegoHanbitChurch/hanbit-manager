import { orderBy } from 'lodash';
import mokjangDAL from './dataAccess/mokjang';

const getAll = async () => {
    const mokjangList = await mokjangDAL.getAll();
    return orderBy(mokjangList, ['name']);
}

export {
    getAll
}
