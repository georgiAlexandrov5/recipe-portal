import firebase from "../firebase/firebase"


const ref = firebase.firestore().collection("recipes");

export default ref;