import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCFjcAul7MEoOZx1TeEiQM5eFMbKV6Kw8I",
    authDomain: "codecrusadersauthentication.firebaseapp.com",
    projectId: "codecrusadersauthentication",
    storageBucket: "codecrusadersauthentication.appspot.com",
    messagingSenderId: "37740625163",
    appId: "1:37740625163:web:773ec2451c827ce8dbf60e",
    measurementId: "G-WPDLJ8DNH2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);