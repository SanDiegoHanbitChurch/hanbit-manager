import familyDAL from './dataAccess/family';

const updateFamily = (family) => familyDAL.update(family);

export {
    updateFamily
};
