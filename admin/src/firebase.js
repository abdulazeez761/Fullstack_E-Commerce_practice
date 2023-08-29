// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_yT2Bsu_l-pP9XN3geji7JE6XCiud7MU",
    authDomain: "shop-fa5fc.firebaseapp.com",
    projectId: "shop-fa5fc",
    storageBucket: "shop-fa5fc.appspot.com",
    messagingSenderId: "654402047965",
    appId: "1:654402047965:web:e9650462a832bc95807034",
    measurementId: "G-K57GLX7EFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;