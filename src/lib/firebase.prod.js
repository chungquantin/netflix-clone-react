import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';
// seed the database

// configuration

const config = {
   apiKey: 'AIzaSyCK_4VZ4EeMstkwLNr7vXYFIGQJ798lsLA',
   authDomain: 'netflixclone-414d0.firebaseapp.com',
   databaseURL: 'https://netflixclone-414d0.firebaseio.com',
   projectId: 'netflixclone-414d0',
   storageBucket: 'netflixclone-414d0.appspot.com',
   messagingSenderId: '999965885322',
   appId: '1:999965885322:web:ad12cafee038673c0c3e73',
   measurementId: 'G-1TLCZ7RGGL',
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
