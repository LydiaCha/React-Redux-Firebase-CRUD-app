import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSvfy5YFHI9ce5PcVyYI-ROUpVGf5RMHA",
  authDomain: "mindtheapp-456c5.firebaseapp.com",
  databaseURL: "https://mindtheapp-456c5.firebaseio.com",
  projectId: "mindtheapp-456c5",
  storageBucket: "mindtheapp-456c5.appspot.com",
  messagingSenderId: "388760623200",
  appId: "1:388760623200:web:09957ffa78f3670da34b05",
  measurementId: "G-9EYH25FEZ8",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref("/posts");
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
