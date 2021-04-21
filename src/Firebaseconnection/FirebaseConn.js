import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyD9xkWVBpmzTCHmrZY3v_-eXwJRXojaUSk",
    authDomain: "newdatabase-21923.firebaseapp.com",
    databaseURL: "https://newdatabase-21923-default-rtdb.firebaseio.com",
    projectId: "newdatabase-21923",
    storageBucket: "newdatabase-21923.appspot.com",
    messagingSenderId: "86220215919",
    appId: "1:86220215919:web:7aa7e60d61c3caa68c1f9a",
    measurementId: "G-8QY1GKE4BZ"
  };
export const FirebaseConn = firebase.initializeApp(firebaseConfig);