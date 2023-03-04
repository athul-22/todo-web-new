import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import './App.css';
import GoogleIcon from '../src/images/GOOGLE.webp';
import toast, { Toaster } from 'react-hot-toast';
import PureModels from './PureModel';

function Profile({ taskNo }) {

    //HOOKS
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profile, setProfile] = useState(GoogleIcon);

    const profileRef = useRef();

    var nameDB = localStorage.getItem("nameDB");
    var profileDB = localStorage.getItem("pictureDB");
    var emailDB = localStorage.getItem("emailDB");

    useEffect(() => {
        if (nameDB === null) {
            toast('Create Account for better experience !', {
                icon: '📢',
            });
            <PureModels />
        } else {
            // toast.error("Create Account for better experience")
            toast(<b>Welcome to todo list</b>, {
                icon: '🎉',
            });
            setName(nameDB);
            setEmail(emailDB);
            setProfile(profileDB);
        }
    }, []);

    //GOOGLE ONE TAP LOGIN
    useGoogleOneTapLogin({
        onError: error => {
            console.log(error);
        },
        onSuccess: response => {
            setName(response.name);
            setEmail(response.email);
            setProfile(response.picture);
            localStorage.setItem("nameDB", response.name);
            localStorage.setItem("emailDB", response.email);
            localStorage.setItem("pictureDB", response.picture);
            toast.success("Account Created Successfully");
            fbFun(response);
        },
        googleAccountConfigs: {
            client_id: "938054737950-90jhm2ntnupbngaf66rsg0k0b4qi6mkr.apps.googleusercontent.com"
        },
    });

    function fbFun(response) {
        const name = response.name;
        const email = response.email;
        const profile = response.picture;

        const newEmail = email.replace(/[&\/\\#,+()$~%.'":*?<>{}@.]/g, '');
        const newEmail1 = newEmail.split('.').join("");
        console.log(newEmail1);
        
        const fbUrl = 'https://todoapp-fb470-default-rtdb.firebaseio.com/'+newEmail+'.json'
        fetch(fbUrl,
        {
            method: "POST",
            headers: {
                email,
            },
            body: JSON.stringify({
                name,
                profile,
                email,
                
            })
        }
    )
    
    }

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
                        <p id='email'>Total Active Tasks : {taskNo}</p>
                    </center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Toaster />
        </>
    );
}

export default Profile;