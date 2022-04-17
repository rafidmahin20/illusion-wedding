// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMjqAzZrbuGkz14JfHR1x9VwOi-K-5oyU",
  authDomain: "illusion-wedding.firebaseapp.com",
  projectId: "illusion-wedding",
  storageBucket: "illusion-wedding.appspot.com",
  messagingSenderId: "879868491912",
  appId: "1:879868491912:web:f72f800d9c34c5f29c873d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;