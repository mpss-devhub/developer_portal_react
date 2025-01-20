import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDdVBX6BVdfey5rGt59FQ5yYrtrZ8_aYag",
  authDomain: "developer-zone-c5ae2.firebaseapp.com",
  projectId: "developer-zone-c5ae2",
  storageBucket: "developer-zone-c5ae2.firebasestorage.app",
  messagingSenderId: "502361507493",
  appId: "1:502361507493:web:13888c9379188cba286f4c",
  measurementId: "G-0B1X7PLTT2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
