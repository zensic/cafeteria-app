// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB662_Fc1CowlT6Dyd_igscmNsxmLU_aGY",
  authDomain: "cafeteria-app-1b669.firebaseapp.com",
  projectId: "cafeteria-app-1b669",
  storageBucket: "cafeteria-app-1b669.appspot.com",
  messagingSenderId: "736199130968",
  appId: "1:736199130968:web:07f7245044db26dd0d6f2d",
};

// Initialize Firebase, check whether FireBase has been init
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();
const db = getFirestore(app);

const fbSignUp = (email, password, callback) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`${user.email} successfully registered`);
    })
    .catch((error) => {
      // Alert the error message
      alert(error.message);

      // If a callback function is provided, call it
      if (callback !== undefined) {
        callback(false);
      }
    });
};

const fbSignIn = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`${user.email} has signed in`);
    })
    .catch((error) => {
      // Alert the error message
      alert(error.message);

      // If a callback function is provided, call it
      if (callback !== undefined) {
        callback(false);
      }
    });
};

export { auth, db, fbSignUp, fbSignIn };
