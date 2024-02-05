import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwm616euuPy48Gl6Jkd-sHSi9ZW-uSymY",
  authDomain: "g44lessin.firebaseapp.com",
  projectId: "g44lessin",
  storageBucket: "g44lessin.appspot.com",
  messagingSenderId: "111796502253",
  appId: "1:111796502253:web:d54bc71a04cfb39a4f96e4"
};


const app = initializeApp(firebaseConfig);

export const firestor =getFirestore(app)