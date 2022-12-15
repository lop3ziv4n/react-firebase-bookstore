import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDad1q8TgTM4AWdACRvGpDURTibFtmYyKY",
    authDomain: "react-firebase-bookstore.firebaseapp.com",
    projectId: "react-firebase-bookstore",
    storageBucket: "react-firebase-bookstore.appspot.com",
    messagingSenderId: "1004429134389",
    appId: "1:1004429134389:web:b11a370dc51c905bebbf7c",
    measurementId: "G-4NLP3EYJJQ"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
