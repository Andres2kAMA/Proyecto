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
  document.getElementById("juegos").addEventListener(
    "click",
    function () {
      plantilla.eliminarPresentacion();
      plantilla.insertarPlantillaDivProductos();
      funcionesFirebase.mostrarTodosProductosAnyadir();
    },
    false
  );

  document.getElementById("cerrarSesion").addEventListener(
    "click",
    function () {
      plantilla.eliminarTodoContenidoPresentacion();
      plantilla.eliminarContenidoJuegos();
      cambiarIdBody();
      plantillaLogin.mostrarLogin();
      funcionesLogin.asignarEventosLogin();
    },
    false
  );
}

function anyadirProducto(idHtml, id) {
  document.getElementById(idHtml).onclick = function () {
    new bootstrap.Toast(document.querySelector(`#toast${id}`)).show();
  };
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
export { mostrarTiendaInicio, anyadirProducto };
