import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import db from './firebase'
// IMAGES
import notificationIcon from '../images/notifcationicon.png';
import notifMain from '../images/notifmain.png';
import notifinsideImg from '../images/EmptyInbox.png';


function Notification(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        db.collection
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