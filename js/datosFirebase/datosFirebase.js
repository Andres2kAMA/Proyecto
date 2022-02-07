"use strict";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfP9idYMJIJ0u4Z5jZ0UNidCv3JELR0oQ",
  authDomain: "proyectojs-5a15c.firebaseapp.com",
  projectId: "proyectojs-5a15c",
  storageBucket: "proyectojs-5a15c.appspot.com",
  messagingSenderId: "700549311889",
  appId: "1:700549311889:web:0fdeebe3329d2bd8c7be30",
};

const app = initializeApp(firebaseConfig);
const autentificacion = getAuth(app);

export { app, autentificacion };
