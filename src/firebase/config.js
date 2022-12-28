import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBFa6Ct43k-apYyuURKRki5fOrhlWinxyo",
  authDomain: "eshop-b5bc0.firebaseapp.com",
  projectId: "eshop-b5bc0",
  storageBucket: "eshop-b5bc0.appspot.com",
  messagingSenderId: "10072046830",
  appId: "1:10072046830:web:b8cdff482de73a211e07ff",
  measurementId: "G-14QY24301D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
