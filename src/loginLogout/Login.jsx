// src/components/Login.js
import React from 'react';
import { auth, provider } from '../firebase.config';
import { signInWithPopup } from "firebase/auth";

export default function Login({ setUser }) {
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log('User Info:', user);
            })
            .catch((error) => {
                console.error('Error during sign-in:', error);
            });
    };

    return (
        <div>
            <button onClick={handleSignIn}>Sign In with Google</button>
        </div>
    );
}
