import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { OAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA4UJGJAsD1uooy2Op_VNznUvS-VwZK0NQ",
    authDomain: "codecrusaders2023-236cc.firebaseapp.com",
    projectId: "codecrusaders2023-236cc",
    storageBucket: "codecrusaders2023-236cc.appspot.com",
    messagingSenderId: "815757764245",
    appId: "1:815757764245:web:abeecef0275d51920d1d9c",
    measurementId: "G-F6KPB44ZSY"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Providers
const microsoftProvider = new OAuthProvider('microsoft.com');
microsoftProvider.setCustomParameters({
    tenant: '8cdef31-a31e-4b4a-93e4-5f571e91255a',
    client_id: '333f169e-6370-4c1d-a8d5-4de62e70ccbe',
    redirect_uri: 'https://codecrusadersauthentication.firebaseapp.com/__/auth/handler',
});
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

export { auth, microsoftProvider, googleProvider, facebookProvider }