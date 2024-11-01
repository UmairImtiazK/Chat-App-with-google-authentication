import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqqn86S_Xwe-zZlMJSz4u2vdU2Q8mSwGs",
  authDomain: "chat-app-react-js-1318f.firebaseapp.com",
  projectId: "chat-app-react-js-1318f",
  storageBucket: "chat-app-react-js-1318f.appspot.com",
  messagingSenderId: "604839848254",
  appId: "1:604839848254:web:62064fd907bd8cf375a46f",
  measurementId: "G-1QQHVREHL5"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export {auth,provider};


