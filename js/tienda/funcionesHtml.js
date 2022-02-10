"use strict";

/**
 * TODO: IMPORTS.
 */
import * as plantilla from "./plantilla.js";
import * as funcionesFirebase from "./funcionesFirebase.js";
import * as funcionesLogin from "../login/funcionesHtml.js";
import * as plantillaLogin from "../login/plantilla.js";

function mostrarTiendaInicio() {
  plantilla.eliminarTodoContenidoLogin();
  cambiarIdBody();
  plantilla.insertarPlantillaHeader();
  plantilla.insertarPlantillaPresentacion();
  plantilla.insertarPlantillaFooter();
  asignarEventosHeader();
}

function asignarEventosHeader() {
  document.getElementById("cerrarSesion").addEventListener(
    "click",
    function () {
      plantilla.eliminarTodoContenidoPresentacion();
      cambiarIdBody();
      plantillaLogin.mostrarLogin();
      funcionesLogin.asignarEventosLogin();
    },
    false
  );
}

function cambiarIdBody() {
  if (document.getElementById("login") != null) {
    document.getElementById("login").id = "tienda";
  } else {
    document.getElementById("tienda").id = "login";
  }
}

/**
 * TODO: EXPORTS.
 */
export { mostrarTiendaInicio };
