// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBBpvHk8FZhrcnK2AMmDDW-q9tZdNOZ45Q",
  authDomain: "gameproject-25efe.firebaseapp.com",
  projectId: "gameproject-25efe",
  storageBucket: "gameproject-25efe.appspot.com",
  messagingSenderId: "42610031127",
  appId: "1:42610031127:web:dd15c6d338fd3afc743a52"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
