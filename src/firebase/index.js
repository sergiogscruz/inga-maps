import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBFkl-jtyXWql_APbLA_aAmVuT4qFGoceA",
    authDomain: "inga-maps.firebaseapp.com",
    projectId: "inga-maps",
    storageBucket: "inga-maps.appspot.com",
    messagingSenderId: "271765720033",
    appId: "1:271765720033:web:4db65acad18e6974f9a0a0",
    measurementId: "G-HPPZ01349Z",
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

export { storage, firebase as default };
