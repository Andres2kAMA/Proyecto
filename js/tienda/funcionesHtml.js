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

  document.getElementById("carrito").addEventListener(
    "click",
    function () {
      plantilla.eliminarContenidoPrincipal();
      insertarPlantillasTiendaInicio();
      plantilla.eliminarPresentacion();
      plantilla.insertarPlantillaDivCarrito();
      insertarProductosCarrito();
    },
    false
  );

  document.getElementById("juegos").addEventListener(
    "click",
    function () {
      plantilla.eliminarPresentacion();
      plantilla.eliminarCarrito();
      plantilla.insertarPlantillaDivProductosAnyadir();
      funcionesFirebase.mostrarTodosProductosAnyadir();
    },
    false
  );

  document.getElementById("cerrarSesion").addEventListener(
    "click",
    function () {
      juegosCarrito = [];
      plantilla.eliminarTodoContenidoPresentacion();
      plantilla.eliminarContenidoJuegos();
      plantilla.eliminarCarrito();
      cambiarIdBody();
      plantillaLogin.mostrarLogin();
      funcionesLogin.asignarEventosLogin();
    },
    false
  );
}

function insertarProductosCarrito() {
  let precioTotal = 0;
  if (juegosCarrito.length != 0) {
    for (let i = 0; i < juegosCarrito.length; i++) {
      precioTotal += juegosCarrito[i].precio;
      plantilla.imprimirProducto(juegosCarrito[i]);
    }
    plantilla.insertarPlantillaFinalizarCompra(precioTotal.toFixed(2));
    asignarEventoComprar();
  } else {
    if (document.getElementById("carritoVacio") == null)
      plantilla.imprimirAvisoCarritoVacio();
  }
}

function anyadirProducto(id, producto) {
  document.getElementById(`anyadirJuego${id}`).onclick = function () {
    new bootstrap.Toast(document.querySelector(`#toast${id}`)).show();
    juegosCarrito.push(producto);
  };
}

function asignarEventoComprar() {
  document.getElementById("comprar").addEventListener(
    "click",
    function () {
      juegosCarrito = [];
      plantilla.eliminarCarrito();
      plantilla.insertarPlantillaDivCarrito();
      plantilla.insertarPlantillaPedidoRealizado();
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
export { mostrarTiendaInicio, anyadirProducto };
