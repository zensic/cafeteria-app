// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const storage = getStorage(app);

const fbSignUp = async (email, password, callback) => {
  // Create a new account with email and password
  // Assign the new account vendor group in FireStore
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Create an entry in the firestore database
      setDoc(doc(db, "userGroup", user.email), {
        group: "vendor",
      });

      console.log(`${user.email} successfully registered`);
    })
    .catch((error) => {
      alert(error.message);

      // If a callback function is provided, call it
      if (callback !== undefined) {
        callback(false);
      }
    });
};

const fbSignIn = async (email, password, callback) => {
  // Check if email in list of roles for firestore
  const docSnap = await getDoc(doc(db, "userGroup", email));

  if (!docSnap.exists() || docSnap.data().group != "vendor") {
    callback(false);
    alert("User doesn't exist!");

    return 0;
  }

  // Check if email and password matches
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`${user.email} has signed in`);
    })
    .catch((error) => {
      alert(error.message);

      // If a callback function is provided, call it
      if (callback !== undefined) {
        callback(false);
      }
    });
};

export { auth, db, storage, fbSignUp, fbSignIn };
