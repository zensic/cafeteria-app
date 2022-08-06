// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import firebaseConfig from "./firebase.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
    vendorTemp.push([
      doc.id,
      doc.data().url,
      doc.data().name,
      doc.data().description,
      doc.data().rating,
    ]);
  });
  setVendorList(vendorTemp);
};

const getFoodList = async (vendorEmail, setFoodList) => {
  let queryRef = query(
    collection(db, "food"),
    where("email", "==", vendorEmail)
  );
  let querySnapshot = await getDocs(queryRef);

  let foodTemp = [];
  querySnapshot.forEach((doc) => {
    foodTemp.push([doc.id, doc.data().url, doc.data().name, doc.data().price]);
  });
  setFoodList(foodTemp);
};

const createCartItem = async (
  customerEmail,
  vendorEmail,
  itemId,
  itemName,
  itemUrl,
  itemQuantity,
  itemPrice
) => {
  let docRef = await addDoc(
    collection(db, "customers", customerEmail, "cart"),
    {
      vendorEmail: vendorEmail,
      itemId: itemId,
      itemName: itemName,
      itemUrl: itemUrl,
      itemQuantity: itemQuantity,
      itemPrice: itemPrice,
    }
  );

  alert(`You added item #${docRef.id} to your cart!`);
};

const getCartList = async (customerEmail, setCartList, setTotalPrice) => {
  let querySnapshot = await getDocs(
    collection(db, "customers", customerEmail, "cart")
  );

  let cartTemp = [];
  let totalPrice = 0.00;
  querySnapshot.forEach((doc) => {
    cartTemp.push([
      doc.id,
      doc.data().itemId,
      doc.data().itemName,
      doc.data().itemUrl,
      doc.data().itemQuantity,
      doc.data().itemPrice,
      doc.data().vendorEmail,
    ]);
    let truePrice = parseFloat(doc.data().itemQuantity) * parseFloat(doc.data().itemPrice);
    totalPrice += truePrice;
  });
  setCartList(cartTemp);
  setTotalPrice(totalPrice)
};

export {
  auth,
  db,
  storage,
  fbSignUp,
  fbSignIn,
  fbGetDownloadURL,
  getVendorList,
  getFoodList,
  createCartItem,
  getCartList,
};
