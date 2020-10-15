import * as uuid from 'uuid';
import firebase from '../firebase';
const storageRef = firebase.storage().ref();

const uploadFile = (file) => {
    const metadata = {
        name: file.name,
        contentType: file.type,
        size: file.size
    }
    return new Promise((resolve, reject) => {
        storageRef.child(`${uuid.v4()}/${file.name}`)
            .put(file, metadata)
            .then(snapshot => {
                snapshot.ref.getDownloadURL()
                    .then(downloadURL => {
                        resolve({
                            url: downloadURL
                        })
                    })
                    .catch(error => reject(error))
            })
            .catch(error => reject(error));
        })
}

export {
    uploadFile
}





