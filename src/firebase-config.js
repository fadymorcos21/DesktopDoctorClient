import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = ({
    apiKey: "AIzaSyBrJH3ahjOPYuYgpGUMN-RB0vc8mgR1l-Q",
    authDomain: "auth-development-e6b10.firebaseapp.com",
    projectId: "auth-development-e6b10",
    storageBucket: "auth-development-e6b10.appspot.com",
    messagingSenderId: "797353930716",
    appId: "1:797353930716:web:0d23238f79705fef1ca919"
})

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
