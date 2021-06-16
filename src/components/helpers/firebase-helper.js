import firebase from "firebase/app"
import "firebase/firestore"

export const FirebaseHelper = {
    initializeApp: function() {
        const firebaseConfig = {
            apiKey: "AIzaSyBFkl-jtyXWql_APbLA_aAmVuT4qFGoceA",
            authDomain: "inga-maps.firebaseapp.com",
            projectId: "inga-maps",
            storageBucket: "inga-maps.appspot.com",
            messagingSenderId: "271765720033",
            appId: "1:271765720033:web:4db65acad18e6974f9a0a0",
            measurementId: "G-HPPZ01349Z"
        };

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }
    },
    printTest: function() {
        setTimeout(() => {
            const db = firebase.firestore()
            db.collection('photos').get().then(snap => {
              const items = {}
              snap.forEach(item => {
                items[item.id] = item.data()
              })
              console.log(items)
            })
        })
    }
}