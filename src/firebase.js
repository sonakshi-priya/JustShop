import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyDRQZ4_0-1wLFjMHv8p9YEkURJLQ2sOcEI",
  authDomain: "justshop-7134c.firebaseapp.com",
  projectId: "justshop-7134c",
  storageBucket: "justshop-7134c.appspot.com",
  messagingSenderId: "610666568639",
  appId: "1:610666568639:web:0699ea7aca466aaada9f0a",
  measurementId: "G-XK06LZD09B",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
