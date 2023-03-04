import React, { useState, useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import notificationIcon from './images/notifcationicon.png';
import notifMain from './images/notifmain.png';
import notifinsideImg from './images/EmptyInbox.png';
import firebase from './firebase'

function Notification() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function fetchAll(){

        const ref = firebase.firestore().collection("todos");
        console.log(ref);


        // db.collection("todos").add({
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1815
        // })
        // .then((docRef) => {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch((error) => {
        //     console.error("Error adding document: ", error);
        // });
    }
    


    // ⭐️ 1 ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

    // const [todos, setTodos] = useState([]);
    // const [todo, setTodo] = useState({});

    // // FIREBASE CREDENTIALS
    // const firebaseApp = firebase.initializeApp({
    //     apiKey: "AIzaSyAl9sbbgwxkyeh1rfQMVxbPnvNvX6SlS4s",
    //     authDomain: "todoapp-fb470.firebaseapp.com",
    //     projectId: "todoapp-fb470",
    //     storageBucket: "todoapp-fb470.appspot.com",
    //     messagingSenderId: "453121987629",
    //     appId: "1:453121987629:web:923cc5722fa474bef314a4"
    // });

    // const db = firebaseApp.firestore();

    // function fetchAll(e){
    //     e.preventDefault();

    //     db.collection("todos")
    //     .get()
    //     .then((snapshot)=>{
    //         if(snapshot.length>0){
    //             snapshot.docs.forEach((doc)=>{
    //                 setTodos((prev)=>{
    //                     return[...prev,doc.data()];
    //                 })
    //             })
    //         }
    //     })
    //     console.log(todos);
    // }

    // ⭐️ 2 ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️

    // FIRST YOUTUBE VIDEO
    // useEffect(()=>{

    //     db.collection("todos").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(`${doc.id} => ${doc.data()}`);
    //         });
    //     });

    //     // db.collection('todos').onSnapshot(snapshot =>{
    //     //     setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().todo})))
    //     // })
    // },[]);

    return (
        <>
            <div>
                <div onClick={handleShow} className='notification-btn'>
                    <center><img onClick={handleShow} src={notifMain} alt='gg' height="45px" width="45px" style={{ 'marginTop': '10px' }} /></center>

                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notifications</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <button onClick={fetchAll}>FETCH</button>
                        <img onClick={handleShow} id='profile' src={notifinsideImg} alt="" height="170px" width="170px" />
                    </center>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Notification;