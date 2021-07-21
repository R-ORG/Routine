import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlYRKXwEq4OP3h-dYcJS7d8BQ9Mh5Awe4",
  authDomain: "reactnativefirebase-87cfe.firebaseapp.com",
  projectId: "reactnativefirebase-87cfe",
  storageBucket: "reactnativefirebase-87cfe.appspot.com",
  messagingSenderId: "200598811506",
  appId: "1:200598811506:web:0bad979e23b6ae65ae63eb",
  measurementId: "G-Z9B8H1HM85",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
