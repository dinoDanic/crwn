import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDyPIOYVZap0AHklY13RCzziRYAThqijZE",
  authDomain: "crwn-db-8de15.firebaseapp.com",
  projectId: "crwn-db-8de15",
  storageBucket: "crwn-db-8de15.appspot.com",
  messagingSenderId: "35257293106",
  appId: "1:35257293106:web:fae44e83f7a63a3d001f2b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
