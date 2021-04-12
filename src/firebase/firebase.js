import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD0d_mwoCqfVdCPrFEndS9-avxP_UNyhcc",
  authDomain: "recipe-portal-32190.firebaseapp.com",
  databaseURL: "https://recipe-portal-32190-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "recipe-portal-32190",
  storageBucket: "recipe-portal-32190.appspot.com",
  messagingSenderId: "31932475264",
  appId: "1:31932475264:web:04b5d32144fb4c6c664365"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();