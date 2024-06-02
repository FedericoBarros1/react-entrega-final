import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD95P_e0-EH_uAUcI_MdKLg8KDIIeYNxjY",
  authDomain: "tpfinalreact-6940a.firebaseapp.com",
  projectId: "tpfinalreact-6940a",
  storageBucket: "tpfinalreact-6940a.appspot.com",
  messagingSenderId: "161400134143",
  appId: "1:161400134143:web:aed0de0a979c4d1312efca"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

