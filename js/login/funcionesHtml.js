"use strict";

/**
 * Asigno los eventos del div para registrarse.
 */
function asignacionEventosRegistro() {
  document.getElementById("crearCuenta").addEventListener(
    "click",
    function () {
      let datosNuevaCuenta = obtenerDatosRegistro();
      console.log(datosNuevaCuenta);
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
