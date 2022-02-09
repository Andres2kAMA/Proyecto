"use strict";

/**
 * TODO: IMPORTS.
 */
import * as plantilla from "./plantilla.js";
import * as funcionesFirebase from "./funcionesFirebase.js";

function mostrarTiendaInicio() {
  plantilla.eliminarTodoContenido();
  console.log("hola");
}

export { mostrarTiendaInicio };
