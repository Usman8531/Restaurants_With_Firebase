// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBj7TbVZuY1ah38fqKZWRNdw2PzmY1Seug",
  authDomain: "eatingout-app.firebaseapp.com",
  projectId: "eatingout-app",
  storageBucket: "eatingout-app.appspot.com",
  messagingSenderId: "279379528137",
  appId: "1:279379528137:web:13dc2a5bb8a30d54944018",
  measurementId: "G-ML5Y0JJQXM",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Uploading the on the firebase

const setData = (data) => {
  setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, { merge: true });
};

// firebase getting data from firestore

const getData = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );
  return items.docs.map((doc) => doc.data());
};
export { app, analytics, firestore, storage, setData, getData };
