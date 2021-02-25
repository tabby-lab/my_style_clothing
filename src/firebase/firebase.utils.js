//in this case we need storage and auth so use these imports
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//from documentation
const config = {
    apiKey: "AIzaSyBsHuByyF9B7KwIrfGuZVREXM0XMdO68Qk",
    authDomain: "mystyle-db.firebaseapp.com",
    projectId: "mystyle-db",
    storageBucket: "mystyle-db.appspot.com",
    messagingSenderId: "588128873047",
    appId: "1:588128873047:web:0675e560ad437d25035112",
    measurementId: "G-H94KMGN9SK"
  };


  firebase.initializeApp(config);

  //export storage and auth
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //for google auth 
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;