"use strict";

//Importo las funciones que voy a utilizar del Firestore.
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  query,
  where,
  orderBy,
  addDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

//Importo la 'key' para acceder al Firebase.
import { app, autentificacion } from "./conexion_Firebase.js";

async function crearUsuario(usuario) {
  createUserWithEmailAndPassword(autentificacion, usuario[2], usuario[3])
    .then((userCredential) => {
      anyadirUsuarioFirebase(usuario);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

async function anyadirUsuarioFirebase(usuario) {
  let usuariosCollection = obtenerColeccionUsuarios();

  const nuevoUsuario = {};

  await addDoc(usuariosCollection, nuevoUsuario);
}

export { validarUsuario };
