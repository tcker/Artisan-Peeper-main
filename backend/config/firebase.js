

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import getAuth to access the auth object


const firebaseConfig = {
  apiKey: "AIzaSyAkRNKXJVBa--Pp-PILg8-0T_OtdSpFMlo",
  authDomain: "artisan-peeper.firebaseapp.com",
  projectId: "artisan-peeper",
  storageBucket: "artisan-peeper.appspot.com",
  messagingSenderId: "122178031252",
  appId: "1:122178031252:web:a50cc6498077d213cbae81",
  measurementId: "G-CS97LJ6LLY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Get the auth object from the initialized app


export { db, auth, app as firebaseApp};
