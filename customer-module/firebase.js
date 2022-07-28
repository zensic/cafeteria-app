// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
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
  // Assign the new account customer group in FireStore
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;

      // Add user to customer group
      await setDoc(doc(db, "userGroups", user.email), {
        group: "customer",
      });

      await setDoc(doc(db, "customers", user.email), {
        url: "",
        name: "default",
        mobile: "",
      });

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

const fbSignIn = async (email, password, callback) => {
  // Check if email in list of roles for firestore
  const docSnap = await getDoc(doc(db, "userGroups", email));

  if (!docSnap.exists() || docSnap.data().group != "customer") {
    callback(false);
    alert(
      "Oops, something went wrong. Have you registered for an account? \n\nThe same email cannot be used to register for different user groups"
    );

    return 0;
  }

  // Check if email and password matches
  signInWithEmailAndPassword(auth, email, password)
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

// Accepts relative path & useState callback, sets it to state using callback function
const fbGetDownloadURL = (path, setImageUrl) => {
  getDownloadURL(ref(storage, path))
    .then((url) => setImageUrl(url))
    .catch((error) => console.log(error));
};

const getVendorList = async (setVendorList) => {
  let queryRef = query(collection(db, "vendors"));
  let querySnapshot = await getDocs(queryRef);

  let vendorTemp = [];
  querySnapshot.forEach((doc) => {
    vendorTemp.push([doc.id, doc.data().url, doc.data().name, doc.data().description, doc.data().rating])
  })
  setVendorList(vendorTemp);
}

const getFoodList = async (setFoodList) => {
  const queryRef = query(collection(db, "food"));

}

export { auth, db, storage, fbSignUp, fbSignIn, fbGetDownloadURL, getVendorList };
