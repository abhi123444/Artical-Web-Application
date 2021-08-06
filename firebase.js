require("firebase/firestore");
import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyCqA1D3l72ioBkpBgbyq5bqYuzjkzk7ASI",
    authDomain: "lifediary-fad4a.firebaseapp.com",
    projectId: "lifediary-fad4a",
    storageBucket: "lifediary-fad4a.appspot.com",
    messagingSenderId: "456152554087",
    appId: "1:456152554087:web:c242a4ec2f85ac99c5d2c2"
  };
  
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  export default db; 