import firebase from '../../firebase';
const storageRef = firebase.storage().ref();

const uploadFile = (directory, file) => {
    const path = `${directory}/${file.name}`;
    const metadata = {
        name: file.name,
        contentType: file.type,
        size: file.size
    };

    return new Promise((resolve, reject) => {
        storageRef.child(path)
            .put(file, metadata)
            .then(snapshot => {
                snapshot.ref.getDownloadURL()
                    .then(downloadURL => resolve({url: downloadURL}))
                    .catch(reject)
            })
            .catch(reject);
    })
}

export {
    uploadFile
}