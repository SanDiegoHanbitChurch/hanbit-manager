import firebase from '../firebase';
import familyDAL from './dataAccess/family';
import { familyIndex } from './search';
import { geocode } from './google';

const geoCodeAddress = async (family) => {
    const { address, latitude, longitude } = family;
    if (address) {
        if (latitude && longitude) {
            return family;
        }

        try {
            const geocodeResult = await geocode(address);

            return await familyDAL.update({
                ...family,
                latitude: geocodeResult.data.results[0].geometry.location.lat,
                longitude: geocodeResult.data.results[0].geometry.location.lng
            });
        } catch (error) {
            console.log(error);
            return family;
        }
    }
}

const convertMembersBirthdate = (family) => {

    const { members = [] } = family;

    return {
        ...family,
        members: members.map(({ birthDate, ...rest }) => {

            return {
                ...rest,
                birthDate: typeof birthDate === 'string'
                    ? new Date(birthDate)
                    : birthDate.toDate()
            }
        })
    };
};

const convertFamilyNotes = (family) => {

    const { notes = [] } = family;

    return {
        ...family,
        notes: notes.map(({ createdAt, ...rest }) => ({
            ...rest,
            createdAt: typeof createdAt === 'string'
                ? new Date(createdAt)
                : createdAt.toDate()
        }))
    }
}

const getFamilyById = async (id) => {
    let family = await familyDAL.getById(id);
    family = await geoCodeAddress(family);
    family = convertMembersBirthdate(family);
    family = convertFamilyNotes(family);

    return family;
};

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
