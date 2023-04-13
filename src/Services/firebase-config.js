import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { OAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFjcAul7MEoOZx1TeEiQM5eFMbKV6Kw8I",
    authDomain: "codecrusadersauthentication.firebaseapp.com",
    projectId: "codecrusadersauthentication",
    storageBucket: "codecrusadersauthentication.appspot.com",
    messagingSenderId: "37740625163",
    appId: "1:37740625163:web:773ec2451c827ce8dbf60e",
    measurementId: "G-WPDLJ8DNH2",
    microsoftProviderId: "microsoft.com",
    microsoftClientId: "333f169e-6370-4c1d-a8d5-4de62e70ccbe",
    microsoftTenantId: "f8cdef31-a31e-4b4a-93e4-5f571e91255a",
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