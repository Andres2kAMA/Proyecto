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
import { app, autentificacion } from "../datosFirebase/datosFirebase.js";

import * as plantilla from "./plantilla.js";

const bd = getFirestore(app);

function obtenerColeccionUsuarios() {
  return collection(bd, "Usuarios");
}

async function crearUsuario(usuario) {
  createUserWithEmailAndPassword(autentificacion, usuario[2], usuario[3])
    .then((userCredential) => {
      anyadirUsuarioFirebase(usuario);
    })
    .catch((error) => {
      console.log("error");
    });
}

async function anyadirUsuarioFirebase(usuario) {
  let usuariosCollection = obtenerColeccionUsuarios();

  const nuevoUsuario = {
    nombre: usuario[0],
    apellidos: usuario[1],
    correo: usuario[2],
    contrasenya: usuario[3],
  };

  await addDoc(usuariosCollection, nuevoUsuario);
  plantilla.mostrarLogin();
}

export { crearUsuario };