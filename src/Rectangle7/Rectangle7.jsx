// src/components/Rectangle7.jsx
import React from 'react';
import { auth } from '../firebase.config'; // Import the auth object
import { signOut } from "firebase/auth"; // Import the signOut function
import './Rectangle7.css';
import frameIcon from "../assets/Icons/Frame 26.svg";
import frame19Icon from "../assets/Icons/Frame 19.svg";
import frame24Icon from "../assets/Icons/Frame 24.svg";
import FillIcon from "../assets/Icons/Fill 901.svg";
import frame22Icon from "../assets/Icons/Frame 22.svg";
import LineIcon from "../assets/Icons/Line 1.svg";
import shape1Icon from "../assets/Icons/Shape (1).svg";
import shapeIcon from "../assets/Icons/Shape.svg";
import userImg from "./umair.jpg";
import groupIcon from "../assets/Icons/Group.svg";

export default function Rectangle7() {
  const signOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('User signed out');
    }).catch((error) => {
      // An error happened.
      console.error('Error signing out:', error);
    });
  };

  return (
    <div className="rectangle7">
      <div className="iconContOne">
        <img src={groupIcon} alt="" />
        <img src={userImg} alt="" />
        <img src={LineIcon} alt="" />
        <img src={frame24Icon} alt="" />
        <img src={frame19Icon} alt="" />
        <img src={shapeIcon} alt="" />
        <img src={FillIcon} alt="" />
        <img src={shape1Icon} alt="" />
      </div>
      <div className="iconContTwo">
        <img src={frame22Icon} alt="" />
        <img src={frameIcon} alt="" onClick={signOutHandler} />
      </div>
    </div>
  );
}
