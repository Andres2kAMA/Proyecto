"use strict";

/**
 * TODO: IMPORTS.
 */
import * as plantilla from "./plantilla.js";
import * as funcionesFirebase from "./funcionesFirebase.js";
import * as funcionesLogin from "../login/funcionesHtml.js";
import * as plantillaLogin from "../login/plantilla.js";

let juegosCarrito = [];

function mostrarTiendaInicio() {
  plantilla.eliminarTodoContenidoLogin();
  cambiarIdBody();
  insertarPlantillasTiendaInicio();
}

function insertarPlantillasTiendaInicio() {
  plantilla.insertarPlantillaHeader();
  plantilla.insertarPlantillaPresentacion();
  plantilla.insertarPlantillaFooter();
  asignarEventosHeader();
}

function asignarEventosHeader() {
  document.getElementById("inicio").addEventListener("click", function () {
    plantilla.eliminarContenidoPrincipal();
    insertarPlantillasTiendaInicio();
  });

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

function anyadirProducto(id, producto) {
  document.getElementById(`anyadirJuego${id}`).onclick = function () {
    new bootstrap.Toast(document.querySelector(`#toast${id}`)).show();
    juegosCarrito.push(producto);
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
