import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth, signInWithPopup, GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJuxSt52tyhYCLsntZnDnXEOudjGvg--o",
  authDomain: "meuprofissadev-55f3b.firebaseapp.com",
  projectId: "meuprofissadev-55f3b",
  storageBucket: "meuprofissadev-55f3b.appspot.com",
  messagingSenderId: "232289573139",
  appId: "1:232289573139:web:746189aa39e66f3655e2e6",
  measurementId: "G-L5780CVK7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const google_auth = document.getElementById("submit-google-auth");
google_auth.addEventListener("click", function (event) {
  event.preventDefault();

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    alert("Usuário autenticado via google!")

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage)
  });

});