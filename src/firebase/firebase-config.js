import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBIAqs68t-KA1-v_INp-Nvp6HTourcZyYE",
    authDomain: "react-app-curso-156cf.firebaseapp.com",
    projectId: "react-app-curso-156cf",
    storageBucket: "react-app-curso-156cf.appspot.com",
    messagingSenderId: "490127260948",
    appId: "1:490127260948:web:ba2ad364ab67fabc2c9601",
    measurementId: "G-LYZLZ34HCC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}