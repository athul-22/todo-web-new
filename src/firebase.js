import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apikey: "",
    authDomain:"",
    projectId: "",
    storageBucket:"",
    appId:""
});

const db = firebaseApp