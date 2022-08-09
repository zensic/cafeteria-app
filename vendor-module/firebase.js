// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import firebaseConfig from "./firebase.config";
import uuid from "react-native-uuid";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
      await setDoc(doc(db, "vendors", user.email), {
        url: "",
        name: "default",
        location: "default",
        description: "default",
        rating: "5.0"
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
        await setDoc(doc(db, "vendors", user.email, "openingHours", item), {
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
    alert(
      "Oops, something went wrong. Have you registered for an account? \n\nThe same email cannot be used to register for different user groups"
    );

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

// Accepts image file & relative path, uploads image to firestore
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

// Accepts relative path & useState callback, sets it to state using callback function
const fbGetDownloadURL = (path, setImageUrl) => {
  getDownloadURL(ref(storage, path))
    .then((url) => setImageUrl(url))
    .catch((error) => console.log(error));
};

const fbUpdateVendorDetails = async (imageUrl, name, description, location) => {
  await setDoc(doc(db, "vendors", auth.currentUser.email), {
    url: imageUrl,
    name: name,
    description: description,
    location: location,
  });
  console.log("Updated vendor details");
};

const fbGetVendorDetails = async (
  setImageUrl,
  setName,
  setDescription,
  setLocation,
) => {
  const docRef = doc(db, "vendors", auth.currentUser.email);
  const vendorDetails = await getDoc(docRef);

  if (vendorDetails != null) {
    setImageUrl(vendorDetails.data().url);
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
  fbGetDownloadURL,
  fbUpdateVendorDetails,
  fbGetVendorDetails
};
