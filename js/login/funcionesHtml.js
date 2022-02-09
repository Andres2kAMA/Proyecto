"use strict";

import * as plantilla from "./plantilla.js";
import * as funcionesFirebase from "./funcionesFirebase.js";
/**
 * Asigno los eventos del div para registrarse.
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
 *
 * @returns Obtengo los datos del formulario de registro.
 */
function obtenerDatosRegistro() {
  let datosNuevaCuenta = [];
  let form = document.getElementById("formRegistro");
  for (let i = 0; i < form.length - 1; i++) {
    datosNuevaCuenta.push(form[i].value);
  }
  return datosNuevaCuenta;
}

function obtenerDatosFormularioSesion() {
  let datosSesion = [];
  let form = document.getElementById("formSesion");
  for (let i = 0; i < form.length - 1; i++) {
    datosSesion.push(form[i].value);
  }
  return datosSesion;
}

function asignarEventosLogin() {
  document.getElementById("iniciarSesion").addEventListener(
    "click",
    function () {
      let datosForm = obtenerDatosFormularioSesion();
      funcionesFirebase.validarUsuarioRegistrado(datosForm[0], datosForm[1]);
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
export {
  asignacionEventosRegistro,
  obtenerDatosFormularioSesion,
  asignarEventosLogin,
};
