import React, { useState, useEffect } from 'react';
import db from './Firebase';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import notificationIcon from '../images/notifcationicon.png';
import notifMain from '../images/notifmain.png';
import notifinsideImg from '../images/EmptyInbox.png';

function Notification(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        db.collection('todos').onSnapshot(snapshot =>{
            setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().todo})))
        })
    },[]);

  return (
    <>
    <div>
        <div onClick={handleShow} className='notification-btn'>
            <center><img onClick={handleShow} src={notifMain} alt='gg' height="45px" width="45px" style={{'marginTop':'10px'}} /></center>
        </div>
    </div>
    <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notifications</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
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