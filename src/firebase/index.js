import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/analytics';
import config from './config';

firebase.initializeApp(config);

export default firebase;
