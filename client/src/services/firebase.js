import firebase from 'firebase/compat';
const firebaseConfig = {
  apiKey: "AIzaSyDDoYaiFFP00IXE9tYKyx1pMG_74ux26Mw",
  authDomain: "flexi-course-60273.firebaseapp.com",
  projectId: "flexi-course-60273",
  storageBucket: "flexi-course-60273.appspot.com",
  messagingSenderId: "880571370645",
  appId: "1:880571370645:web:a3c85c7d032b74dc861f9c",
  measurementId: "G-WQF4TPTWY0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;