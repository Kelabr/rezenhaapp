import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7qqHlaZ_9H8FGT5wKH_cKOG_6RVbQ5uU",
    authDomain: "rezenhaapp-b8438.firebaseapp.com",
    projectId: "rezenhaapp-b8438",
    storageBucket: "rezenhaapp-b8438.firebasestorage.app",
    messagingSenderId: "760353459021",
    appId: "1:760353459021:android:64f5a342a2e81c5f52c504"
  };
  

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };