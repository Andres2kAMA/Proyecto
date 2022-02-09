"use strict";

// TODO: IMPORTS.
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { app, autentificacion } from "../datosFirebase/datosFirebase.js";

import * as plantilla from "./plantilla.js";

const bd = getFirestore(app);

/**
 *
 * @returns Devuelvo la colección de Usuarios.
 */
function obtenerColeccionUsuarios() {
  return collection(bd, "Usuarios");
}

/**
 ** Creo un usuario y lo añado a la BBDD de Firebase.
 * @param {Object} usuario
 */
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

/**
  obtenerDatosFormularioSesion,
async function anyadirUsuarioFirebase(usuario) {
  let usuariosCollection = obtenerColeccionUsuarios();

  const nuevoUsuario = {
    nombre: usuario[0],
    apellidos: usuario[1],
    correo: usuario[2],
  };

  await addDoc(usuariosCollection, nuevoUsuario);
}

/**
 ** Inicio la sesión del usuario.
 * @param {String} correo
 * @param {String} contraseña
 */
async function iniciarSesion(correo, contraseña) {
  signInWithEmailAndPassword(autentificacion, correo, contraseña)
    .then((userCredential) => {
      //Si el usuario ya se ha registrado le redirijo a la tienda.
    })
    .catch(() => {
      if (document.getElementById("mensajeError") == null) {
        plantilla.mostrarError("Revisa el usuario o contraseña");
      }
    });
}

/**
 * TODO: EXPORTS.
 */
export { crearUsuario, iniciarSesion };
