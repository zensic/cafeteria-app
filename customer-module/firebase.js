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
  deleteDoc,
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
  await addDoc(
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

  alert(`You added ${itemQuantity} ${itemName} to your cart!`);
};

const getCartList = async (setCartList, setTotalPrice) => {
  let querySnapshot = await getDocs(
    collection(db, "customers", auth.currentUser.email, "cart")
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
  setTotalPrice(totalPrice.toFixed(2));
};

const deleteAllCartItems = async () => {
  // Grabs reference of all cart items
  let querySnapshot = await getDocs(
    collection(db, "customers", auth.currentUser.email, "cart")
  );
  // Iterates through reference of all cart items and deletes them
  querySnapshot.forEach(async (docRef) => {
    await deleteDoc(doc(db, "customers", auth.currentUser.email, "cart", docRef.id))
  })
}

const addOrders = async (location) => {
    // Grabs reference of all cart items
    let querySnapshot = await getDocs(
      collection(db, "customers", auth.currentUser.email, "cart")
    );
    // Iterates through reference of all cart items and deletes them
    querySnapshot.forEach(async (docRef) => {
      // Get current date and time
      let currentdate = new Date(); 
      let datetime = currentdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

      await addDoc(collection(db, "orders"), {
        // Add vendor's orders section
        vendor: docRef.data().vendorEmail,
        customer: auth.currentUser.email,
        location: location,
        createdAt: datetime,
        status: "pending",
        name: docRef.data().itemName,
        price: docRef.data().itemPrice,
        quantity: docRef.data().itemQuantity,
        url: docRef.data().itemUrl
      });

      await deleteDoc(doc(db, "customers", auth.currentUser.email, "cart", docRef.id));
    })
}

const fbGetCurrentOrders = async (setOrderList) => {
  // let orders =  await getDocs(collection(db, "orders"), where("customer", "==", auth.currentUser.email));

  let q = query(
    collection(db, "orders"),
    where("customer", "==", auth.currentUser.email),
    where("status", "==", "pending")
  );

  let orders = await getDocs(q);

  let ordersTemp = [];
  orders.forEach((doc) => {
    ordersTemp.push({
      id: doc.id,
      createdAt: doc.data().createdAt,
      customer: doc.data().customer,
      location: doc.data().location,
      name: doc.data().name,
      price: doc.data().price,
      quantity: doc.data().quantity,
      status: doc.data().status,
      url: doc.data().url,
      vendor: doc.data().vendor,
    });
  });

  console.log("Fetched current order data");
  setOrderList(ordersTemp);
}

const fbGetPastOrders = async (setOrderList) => {
  // let orders =  await getDocs(collection(db, "orders"), where("customer", "==", auth.currentUser.email));

  let q = query(
    collection(db, "orders"),
    where("customer", "==", auth.currentUser.email),
    where("status", "==", "complete")
  );

  let orders = await getDocs(q);

  let ordersTemp = [];
  orders.forEach((doc) => {
    ordersTemp.push({
      id: doc.id,
      createdAt: doc.data().createdAt,
      customer: doc.data().customer,
      location: doc.data().location,
      name: doc.data().name,
      price: doc.data().price,
      quantity: doc.data().quantity,
      status: doc.data().status,
      url: doc.data().url,
      vendor: doc.data().vendor,
    });
  });

  console.log("Fetched past order data");
  setOrderList(ordersTemp);
}


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
  deleteAllCartItems,
  addOrders,
  fbGetCurrentOrders,
  fbGetPastOrders
};
