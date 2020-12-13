// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAy-GOhEZAfHo8YdUXv5GLaQjWLAUczv1Y",
  authDomain: "clone-70938.firebaseapp.com",
  databaseURL: "https://clone-70938.firebaseio.com",
  projectId: "clone-70938",
  storageBucket: "clone-70938.appspot.com",
  messagingSenderId: "98681030300",
  appId: "1:98681030300:web:84d368cbf85ec3b866cf59",
  measurementId: "G-GW7RQ86L6L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth();

export { db, auth };
