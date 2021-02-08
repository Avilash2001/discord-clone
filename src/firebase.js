import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4iIcoI5cWqyj6S9qGEQ55UDsX55bfz70",
  authDomain: "discord-clone-804fb.firebaseapp.com",
  projectId: "discord-clone-804fb",
  storageBucket: "discord-clone-804fb.appspot.com",
  messagingSenderId: "1058336071308",
  appId: "1:1058336071308:web:10dde495de1865acc225a9",
  measurementId: "G-7BPZZ0WZWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
