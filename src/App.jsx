import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from './firebase.config';
import Login from './loginLogout/Login';
import Header from './Header/Header';
import Frame2 from './Frame2/Frame2';

function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

 
  return (
    <div className="App">
      {user ? (
        <>
          <Header />
          <Frame2/>
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
