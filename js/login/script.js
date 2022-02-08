"use strict";

/**
 * Imports.
 */

import * as plantilla from "./plantilla.js";
import * as funcionesHtml from "./funcionesHtml.js";
import * as funcionesFirebase from "./funcionesFirebase.js";

window.onload = function () {
  plantilla.insertarPlantillaLogin();

  document.getElementById("iniciarSesion").addEventListener(
    "click",
    function () {
      let datosForm = funcionesHtml.obtenerDatosFormularioSesion();
      funcionesFirebase.validarUsuarioRegistrado(datosForm[0], datosForm[1]);
    },
    false
  );

  document.getElementById("registro").addEventListener(
    "click",
    function () {
      plantilla.mostrarRegistro();
      funcionesHtml.asignacionEventosRegistro();
    },
    false
  );
};
