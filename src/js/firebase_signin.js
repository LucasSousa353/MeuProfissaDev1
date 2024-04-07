import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Usuário cadastrado")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

});
