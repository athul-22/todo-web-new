import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import notificationIcon from '../images/notificationIcon.png';

function Notification(){
 const [ Notiicon , setNotiicon] = useState("");
 setNotiicon({notificationIcon});

  return (
    <div>
        <div className='notification-btn'>
            <img  src={Notiicon} alt='gg'/>
        </div>
    </div>
  )
}

export default Notification;