// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "apiKey",
//   authDomain: "authDomain",
//   projectId: "projectId",
//   storageBucket: "messagingSenderId",
//   messagingSenderId: "53758172955",
//   appId: "appId",
//   measurementId: "measurementId"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAbPkqEEGLwqkH_cdTJUPVEQVd2sN0P4NQ",
  authDomain: "react-auth-26ac2.firebaseapp.com",
  projectId: "react-auth-26ac2",
  storageBucket: "react-auth-26ac2.appspot.com",
  messagingSenderId: "869509751048",
  appId: "1:869509751048:web:efa8ed7abc46bde8f24cbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth, analytics };