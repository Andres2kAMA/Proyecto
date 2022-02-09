"use strict";

//Importo las funciones que voy a utilizar del Firestore.
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import {
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
    .then(() => {
      anyadirUsuarioFirebase(usuario);
    })
    .catch(() => {
      if (document.getElementById("mensajeError") == null) {
        plantilla.mostrarError(
          "El usuario ya ha sido registrado anteriormente"
        );
      }
    });
}

async function anyadirUsuarioFirebase(usuario) {
  let usuariosCollection = obtenerColeccionUsuarios();

  const nuevoUsuario = {
    nombre: usuario[0],
    apellidos: usuario[1],
    correo: usuario[2],
  };

  await addDoc(usuariosCollection, nuevoUsuario);
}

async function validarUsuarioRegistrado(correo, contraseña) {
  signInWithEmailAndPassword(autentificacion, correo, contraseña)
    .then((userCredential) => {
      console.log(userCredential);
      console.log("object");
    })
    .catch(() => {
      if (document.getElementById("mensajeError") == null) {
        plantilla.mostrarError("Revisa el usuario o contraseña");
      }
    });
}

export { crearUsuario, validarUsuarioRegistrado };
