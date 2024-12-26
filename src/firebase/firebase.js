// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Corrected this line
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkyA9Nyc6ckDnOi5dGErET89-TEH7J44Q",
  authDomain: "first-one-e1330.firebaseapp.com",
  projectId: "first-one-e1330",
  storageBucket: "first-one-e1330.firebasestorage.app",
  messagingSenderId: "321257575717",
  appId: "1:321257575717:web:bedfa63e2634034a3536cc",
  measurementId: "G-3FCZQ54B2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); 
const db = getFirestore(app); 
const googleProvider = new GoogleAuthProvider();
export { app, auth, analytics, db, googleProvider };
