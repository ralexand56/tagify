import * as firebase from "firebase/app";
import "firebase/firestore";

export const config = {
  apiKey: "AIzaSyARKe_8ohh0fNJcsWzIfWquxNZBiOfI18I",
  authDomain: "tagify-1d1dc.firebaseapp.com",
  databaseURL: "https://tagify-1d1dc.firebaseio.com",
  projectId: "tagify-1d1dc",
  storageBucket: "tagify-1d1dc.appspot.com",
  messagingSenderId: "249388467171",
  appId: "1:249388467171:web:69b0a98e93d55f2a72d6d6",
};

firebase.initializeApp(config);

export const db = firebase.firestore();

export default firebase;
