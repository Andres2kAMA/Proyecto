"use strict";

/**
 * TODO: IMPORTS.
 */
import * as plantilla from "./plantilla.js";
import * as funcionesFirebase from "./funcionesFirebase.js";

function mostrarTiendaInicio() {
  plantilla.eliminarTodoContenido();
  cambiarIdBody();
  plantilla.insertarPlantillaHeader();
  plantilla.insertarPlantillaPresentacion();
  plantilla.insertarPlantillaFooter();
  asignarEventosHeader();
}

function asignarEventosHeader() {}
function cambiarIdBody() {
  if (document.getElementById("login") != null) {
    document.getElementById("login").id = "tienda";
  }
}

/**
 * TODO: EXPORTS.
 */
export { mostrarTiendaInicio };
