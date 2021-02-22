import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBpC1o7rj8fuMWTOS8YWj8bKlbIPJCjZSg",
    authDomain: "tinder-clone-project-73a25.firebaseapp.com",
    projectId: "tinder-clone-project-73a25",
    storageBucket: "tinder-clone-project-73a25.appspot.com",
    messagingSenderId: "625251597596",
    appId: "1:625251597596:web:81b2d0f13350aeae590ed9",
    measurementId: "G-PDNKPTPVQ5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebase.firestore();

  export default database;
