"use strict";

/**
 * TODO: IMPORTS.
 */
import * as plantilla from "./plantilla.js";
import * as funcionesFirebase from "./funcionesFirebase.js";

/**
 ** Asigno los eventos del Login.
 */
function asignarEventosLogin() {
  document.getElementById("iniciarSesion").addEventListener(
    "click",
    function () {
      let datosForm = obtenerDatosFormularioSesion();
      funcionesFirebase.iniciarSesion(datosForm[0], datosForm[1]);
    },
    false
  );

  document.getElementById("registro").addEventListener(
    "click",
    function () {
      plantilla.mostrarRegistro();
      asignacionEventosRegistro();
    },
    false
  );
}

/**
 ** Asigno los eventos del div para registrarse.
 */
function asignacionEventosRegistro() {
  document.getElementById("crearCuenta").addEventListener(
    "click",
    function () {
      let datosNuevaCuenta = obtenerDatosRegistro();
      plantilla.eliminarTodoContenido();
      plantilla.insertarPlantillaLogin();
      asignarEventosLogin();
      funcionesFirebase.crearUsuario(datosNuevaCuenta);
    },
    false
  );
}

/**
 * Devuelvo los datos del formulario de registro.
 * @returns @param {Array}
 */
function obtenerDatosRegistro() {
  let datosNuevaCuenta = [];
  let form = document.getElementById("formRegistro");
  for (let i = 0; i < form.length - 1; i++) {
    datosNuevaCuenta.push(form[i].value);
  }
  return datosNuevaCuenta;
}

/**
 ** Devuelvo los datos del formulario de inicio de sesión.
 * @returns @param {Array}
 */
function obtenerDatosFormularioSesion() {
  let datosSesion = [];
  let form = document.getElementById("formSesion");
  for (let i = 0; i < form.length - 1; i++) {
    datosSesion.push(form[i].value);
  }
  return datosSesion;
}

/**
 * TODO: EXPORTS.
 */
export { asignarEventosLogin, asignacionEventosRegistro };
