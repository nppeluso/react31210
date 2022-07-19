// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvmxt1O1M9dYvJVbN3x_wSxTEiVjwsREM",
  authDomain: "guarderiabetyvero.firebaseapp.com",
  projectId: "guarderiabetyvero",
  storageBucket: "guarderiabetyvero.appspot.com",
  messagingSenderId: "265369865749",
  appId: "1:265369865749:web:ce7c61dbe5674d5016c81c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);