import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import './App.css';
import GoogleIcon from '../src/images/GOOGLE.webp';
import toast, { Toaster } from 'react-hot-toast';


function Profile() {

    //HOOKS
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profile, setProfile] = useState(GoogleIcon);

    const [lengthArr , setLengthArr ] = useState("0");

    const profileRef = useRef();

    // // IF ELSE LOGIN CHECKING FUNCTION
   
    // var nameDB = localStorage.getItem("nameDB");
    // // var profileDB = localStorage.getItem("pictureDB");
    // // var emailDB = localStorage.getItem("emailDB");
    // // var profileImage = document.getElementById("profile");
    // if (name === "") {
    //    // profileRef.current.src = {GoogleIcon};
    //    //setProfile(GoogleIcon);
       
    // }
    // if (nameDB === "") {
    //    // profileRef.current.src = {GoogleIcon};
    //    //setProfile(GoogleIcon);
    // } else {

    //    // profileRef.current.src = {GoogleIcon};
       
    // }
   
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
            toast.success("Account Created Successfully");
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
                <img ref={profileRef} onClick={handleShow} id='profile' src={profile} alt="" height="50px" width="50px" />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center>
                        <img onClick={handleShow} id='profile' src={profile} alt="" height="70px" width="70px" />
                        <p id='name'>{name}</p>
                        <p id='email'>{email}</p>
                        <p id='email'>Total Tasks Created : {lengthArr}</p>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Toaster/>
        </>
    );
}

export default Profile;