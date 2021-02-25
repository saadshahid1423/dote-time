import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAOROKFcCSqx8EAj6Yv7cqiXT7XoUHt7zw",
  authDomain: "transo-28f9b.firebaseapp.com",
  projectId: "transo-28f9b",
  storageBucket: "transo-28f9b.appspot.com",
  messagingSenderId: "894752966612",
  appId: "1:894752966612:web:c4e9034858d61587ddb841",

};
firebase.initializeApp(firebaseConfig);
export default firebase;