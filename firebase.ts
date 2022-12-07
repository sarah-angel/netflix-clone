// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGwaCYDAC415gPk0if3XxwOOGQvBGk01o",
  authDomain: "netflix-clone-6e285.firebaseapp.com",
  projectId: "netflix-clone-6e285",
  storageBucket: "netflix-clone-6e285.appspot.com",
  messagingSenderId: "100316274824",
  appId: "1:100316274824:web:86ec444c3947201b83bf3d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }