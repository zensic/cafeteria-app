// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import uuid from "react-native-uuid";

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
    .then(async (userCredential) => {
      const user = userCredential.user;

      // Add user to vendor group
      await setDoc(doc(db, "userGroups", user.email), {
        group: "vendor",
      });

      // Add default vendor details
      await setDoc(doc(db, "vendor", user.email), {
        name: "default",
        location: "default",
        description: "default",
      });

      // List of all days in week
      const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ];

      // Interate through all days in a week
      days.forEach(async (item) => {
        // Add default opening & closing hours & whether the vendor works that day
        await setDoc(doc(db, "vendor", user.email, "openingHours", item), {
          isOpen: false,
          timeStart: "",
          timeEnd: "",
        });
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
  const docSnap = await getDoc(doc(db, "userGroups", email));

  if (!docSnap.exists() || docSnap.data().group != "vendor") {
    callback(false);
    alert("Vendor doesn't exist!");

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

const fbUploadImage = async (foodImage, path) => {
  // Generate uuid
  let imageName = uuid.v4();

  // Upload image to firebase if image exists
  const refence = ref(storage, `${path}/${imageName}`);
  const imageFile = await fetch(foodImage.uri);
  const bytes = await imageFile.blob();

  await uploadBytes(refence, bytes);

  return imageName;
};

const fbUpdateVendorDetails = async (name, description, location) => {
  await setDoc(doc(db, "vendor", auth.currentUser.email), {
    name: name,
    description: description,
    location: location,
  });
  console.log("Updated vendor details");
};

const fbGetVendorDetails = async (setName, setDescription, setLocation) => {
  const docRef = doc(db, "vendor", auth.currentUser.email);
  const vendorDetails = await getDoc(docRef);

  if (vendorDetails != null) {
    setName(vendorDetails.data().name);
    setDescription(vendorDetails.data().description);
    setLocation(vendorDetails.data().location);
  }
  console.log("Fetched vendor details");
};

export {
  auth,
  db,
  storage,
  fbSignUp,
  fbSignIn,
  fbUploadImage,
  fbUpdateVendorDetails,
  fbGetVendorDetails,
};
