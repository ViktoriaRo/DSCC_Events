import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCR8WmtG_DllPn3LRySiyofBRt60oeQFd4",
    authDomain: "enlightning-976fd.firebaseapp.com",
    databaseURL: "https://enlightning-976fd.firebaseio.com",
    projectId: "enlightning-976fd",
    storageBucket: "enlightning-976fd.appspot.com",
    messagingSenderId: "717223605384"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;