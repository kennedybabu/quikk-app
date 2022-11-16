import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyD9Xr3dmoIFsn0dcZtlB0UNWJkyaaEPtDg",
  authDomain: "web-platform-3191f.firebaseapp.com",
  databaseURL: "https://web-platform-3191f-default-rtdb.firebaseio.com/",
  projectId: "web-platform-3191f",
  storageBucket: "web-platform-3191f.appspot.com",
  messagingSenderId: "724728944259",
  appId: "1:724728944259:web:dc49c9e50e02696a1b2db6",
  measurementId: "G-C2BWMES5S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);