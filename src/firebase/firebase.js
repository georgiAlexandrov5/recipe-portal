import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAuQ0c9-PnrLDCio0AdxK-dbFgBzNituTw",
    authDomain: "",
    projectId: "recipeportal-7f960",
    storageBucket: "react-my-pets.appspot.com",
    messagingSenderId: "903466778741",
    appId: "1:903466778741:web:6281a57331e104eb86b83c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();