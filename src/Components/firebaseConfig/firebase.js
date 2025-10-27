import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: "https://truckingwellness-714f3-default-rtdb.firebaseio.com",
  projectId: "truckingwellness-714f3",
  storageBucket: "truckingwellness-714f3.appspot.com",
  messagingSenderId: "33050189455",
  appId: "1:33050189455:web:4ae562a75e235c10391afa",
  measurementId: "G-2EHWJ9VV4R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
export { auth }
export const db = getFirestore(app)

