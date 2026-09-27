import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3tUTLv7pmm8iyTk2Z-qif10hyOfZOx6E",
  authDomain: "dgtv-admin.firebaseapp.com",
  projectId: "dgtv-admin",
  storageBucket: "dgtv-admin.firebasestorage.app",
  messagingSenderId: "533586461873",
  appId: "1:533586461873:web:4d0f135b750f646c4f0e90"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
