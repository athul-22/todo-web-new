import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import './App.css';


function Profile() {

    // GOOGLE SIGNIN 
    const [name, setName] = useState("");
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
            console.log(response);
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
                <img onClick={handleShow} id='profile' src={profile} alt="" height="50px" width="50px" />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <center>
                    <img onClick={handleShow} id='profile' src={profile} alt="" height="50px" width="50px" />
                    <p id='name'>{name}</p>
                    <p id='email'>{email}</p>
                    </center> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Profile;