import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apikey: "AIzaSyAl9sbbgwxkyeh1rfQMVxbPnvNvX6SlS4s",
    authDomain:"",
    projectId: "",
    storageBucket:"",
    appId:"todoapp-fb470"
});

const db = firebaseApp.firestore();

export default db;