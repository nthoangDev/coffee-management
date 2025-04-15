import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBSmU_lsUuWurWqSAWYte1fTkBK2LpN7wE",
    authDomain: "coffee-management-2613c.firebaseapp.com",
    projectId: "coffee-management-2613c",
    storageBucket: "coffee-management-2613c.firebasestorage.app",
    messagingSenderId: "723876475542",
    appId: "1:723876475542:web:9711d1e99cdd684d1948b7",
    measurementId: "G-1WMPC3YR71"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }