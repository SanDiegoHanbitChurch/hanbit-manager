import firebase from '../../firebase';
const db = firebase.firestore();

const firestoreDAL = (collection) => {
    const collectionRef = db.collection(collection);
    
    const getAll = () => {
        return new Promise((resolve, reject) => {
            collectionRef.get()
                .then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        }
                    });
                    resolve(data);
                })
                .catch(error => {
                    // TODO: log the error
                    reject(error);
                })
        })
    }
    
    const getById = (id) => {
        const docRef = collectionRef.doc(id);
    
        return new Promise((resolve, reject) => {
            docRef.get()
                .then(doc => {
                    if (doc.exists) {
                        resolve({
                            id: doc.id,
                            ...doc.data()
                        });
                    } else {
                        reject('document does not exist');
                    }
                })
                .catch(error => {
                    // TODO: log error
                    reject(error);
                })
        })
    }
    
    const search = (field, operator, value) => {
        const query = collectionRef.where(field, operator, value);
        
        return new Promise((resolve, reject) => {
            query.get()
                .then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data());
                    resolve(data);
                })
                .catch(error => {
                    // TODO: log the error
                    reject(error);
                })
        })
    }
    
    const add = (document) => {
        return new Promise((resolve, reject) => {
            collectionRef.add(document)
                .then(docRef => resolve(docRef.id))
                .catch(error => {
                    // TODO: log error
                    reject(error);
                })
        })
    }
    
    const update = (document) => {
        const docRef = collectionRef.doc(document.id);
        return docRef.update(document);
    }

    const remove = (document) =>  collectionRef.doc(document.id).delete();

    return {
        getAll,
        getById,
        search,
        add,
        update,
        remove
    }
}

export default firestoreDAL;