import {getStorage} from "firebase/storage";
import {getAuth} from  "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJMjdeshayft3zCgbna9pzg4YvPHVgy2k",
  authDomain: "saveourimage.firebaseapp.com",
  projectId: "saveourimage",
  storageBucket: "saveourimage.appspot.com",
  messagingSenderId: "998787564966",
  appId: "1:998787564966:web:f7390a2cd9526a556f7b67",
  measurementId: "G-KNPBH46C3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const projectfirestore = getFirestore(app)
const projectstorage = getStorage(app);
const auth = getAuth(app)


export {projectstorage, projectfirestore,auth}