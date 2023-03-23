import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyBs_FCnp_wFntHgnvwhmDRKI6-nC5Nh-jc",
    authDomain: "tandoori-bbq.firebaseapp.com",
    projectId: "tandoori-bbq",
    storageBucket: "tandoori-bbq.appspot.com",
    messagingSenderId: "1080039971005",
    appId: "1:1080039971005:web:861d9803e709241f773fd4",
    measurementId: "G-30XWQHHE2R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;