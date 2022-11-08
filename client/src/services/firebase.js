import firebase from 'firebase/compat/app';
import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"
import 'firebase/compat/firestore';
import "firebase/compat/auth";
// import * as firebase from 'firebase';
// import 'firebase/auth';
// import firebaseAuth from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDDoYaiFFP00IXE9tYKyx1pMG_74ux26Mw",
    authDomain: "flexi-course-60273.firebaseapp.com",
    projectId: "flexi-course-60273",
    storageBucket: "flexi-course-60273.appspot.com",
    messagingSenderId: "880571370645",
    appId: "1:880571370645:web:a3c85c7d032b74dc861f9c",
    measurementId: "G-WQF4TPTWY0"
};


firebase.initializeApp(firebaseConfig);
const db = getFirestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = firebase.auth();
export default firebase;

export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(provider);
    const user = res.user;
    const userRef = collection(db, "users");
    const result = await getDocs(query(userRef, where("uid", "==", user.uid)));
    if (result.empty) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    alert(err.message);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    alert(err.message);
  }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err.message);
  }
};