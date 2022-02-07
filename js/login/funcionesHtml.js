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
      funcionesFirebase.crearUsuario(datosNuevaCuenta);
      plantilla.eliminarTodoContenido();
      plantilla.insertarPlantillaLogin();
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

export { asignacionEventosRegistro };
