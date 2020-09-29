import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyATiHW9rgwvs4YdP0qm-OKTVGAHegfWJqA",
    authDomain: "react-firebase-app-36c03.firebaseapp.com",
    databaseURL: "https://react-firebase-app-36c03.firebaseio.com",
    projectId: "react-firebase-app-36c03",
    storageBucket: "react-firebase-app-36c03.appspot.com",
    messagingSenderId: "620011218376",
    appId: "1:620011218376:web:cb63cdaa1e7c3dcb378cfd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };