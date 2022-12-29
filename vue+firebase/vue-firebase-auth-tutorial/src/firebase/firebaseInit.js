import firebase from "firebase/app";
import 'firebase/firestore'
//import firebase from 'firebase'


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRpZN1_9F9q1_M0lpBvzUnpQm9cTXtscU",
  authDomain: "vue3-firebase-tutorial-abeed.firebaseapp.com",
  projectId: "vue3-firebase-tutorial-abeed",
  storageBucket: "vue3-firebase-tutorial-abeed.appspot.com",
  messagingSenderId: "958290710543",
  appId: "1:958290710543:web:7d656dcaad283557d8137a"
};

// Initialize Firebas
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp