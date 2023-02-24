import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import './App.css';
import GoogleIcon from '../src/images/GOOGLE.webp'

function Profile() {

    // IF ELSE LOGIN CHECKING FUNCTION
    const [name, setName] = useState("");
   var nameDB = localStorage.getItem("nameDB");
   var profileDB = localStorage.getItem("pictureDB");
   var emailDB = localStorage.getItem("emailDB");

    if (name === "") {
        document.getElementById("profile").src={GoogleIcon};
    }
    if(nameDB === ""){
        document.getElementById("profile").src={GoogleIcon};
    }else{
        
        document.getElementById("profile").src={profileDB};
    }
    // GOOGLE SIGNIN 
  
    const [email, setEmail] = useState("");
    const [profile, setProfile] = useState("");


    // GOOGLE ONE TAP POPUP

    useGoogleOneTapLogin({
        onError: error => {
            console.log(error);
        },
        onSuccess: response => {
            setName(response.name);
            setEmail(response.email);
            setProfile(response.picture);
            localStorage.setItem("nameDB", JSON.stringify(response.name));
            localStorage.setItem("emailDB", JSON.stringify(response.email));
            localStorage.setItem("pictureDB", JSON.stringify(response.picture));
        },
        googleAccountConfigs: {
            client_id: "938054737950-90jhm2ntnupbngaf66rsg0k0b4qi6mkr.apps.googleusercontent.com"
        },
    });


    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow} className='account'>
                <img onClick={handleShow} id='profile' src={GoogleIcon} alt="" height="50px" width="50px" />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <img onClick={handleShow} id='profile' src={GoogleIcon} alt="" height="50px" width="50px" />
                        <p id='name'>{name}</p>
                        <p id='email'>{email}</p>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Profile;