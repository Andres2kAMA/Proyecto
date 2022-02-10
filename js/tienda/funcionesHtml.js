"use strict";

/**
 * TODO: IMPORTS.
 */
import * as plantilla from "./plantilla.js";
import * as funcionesFirebase from "./funcionesFirebase.js";
import * as funcionesLogin from "../login/funcionesHtml.js";
import * as plantillaLogin from "../login/plantilla.js";

let juegosCarrito = [];

/**
 * Muestro la tienda si se ha registrado el Admin.
 */
function mostrarTiendaInicioAdmin() {
  plantilla.eliminarLogin();
  cambiarIdBodyAdmin();
  insertarPlantillasTiendaInicio();
  asignarEventosHeaderAdmin();
}

/**
 * Muestro la tienda si se ha registrado un usuario.
 */
function mostrarTiendaInicio() {
  plantilla.eliminarLogin();
  cambiarIdBody();
  insertarPlantillasTiendaInicio();
  asignarEventosHeader();
}

/**
 * Inserto todas las plantillas del inicio.
 */
function insertarPlantillasTiendaInicio() {
  plantilla.insertarPlantillaHeader();
  plantilla.insertarPlantillaPresentacion();
  plantilla.insertarPlantillaFooter();
}

/**
 * Asigno los eventos del header si se ha logueado el usuario.
 */
function asignarEventosHeader() {
  document.getElementById("inicio").addEventListener("click", function () {
    plantilla.eliminarTodoContenido();
    insertarPlantillasTiendaInicio();
    asignarEventosHeader();
  });

  document.getElementById("carrito").addEventListener(
    "click",
    function () {
      plantilla.eliminarTodoContenido();
      insertarPlantillasTiendaInicio();
      asignarEventosHeader();
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
      plantilla.eliminarTodoContenido();
      cambiarIdBody();
      plantillaLogin.mostrarLogin();
      funcionesLogin.asignarEventosLogin();
    },
    false
  );
}

/**
 * Asigno eventos del header si se ha logueado el admin.
 */
function asignarEventosHeaderAdmin() {
  document.getElementById("inicio").addEventListener("click", function () {
    plantilla.eliminarTodoContenido();
    insertarPlantillasTiendaInicio();
    asignarEventosHeaderAdmin();
  });

  document.getElementById("crearJuego").addEventListener(
    "click",
    function () {
      plantilla.eliminarTodoContenido();
      insertarPlantillasTiendaInicio();
      asignarEventosHeaderAdmin();
      plantilla.eliminarPresentacion();
      plantilla.insertarPlantillaDivCrearProducto();
      plantilla.insertarFormularioCrearProducto();
      asignarEventosCrearProducto();
    },
    false
  );

  document.getElementById("actualizarJuego").addEventListener(
    "click",
    function () {
      plantilla.eliminarTodoContenido();
      insertarPlantillasTiendaInicio();
      asignarEventosHeaderAdmin();
      plantilla.eliminarPresentacion();
      plantilla.insertarPlantillaDivActualizar();
      funcionesFirebase.mostrarTodosProductosActualizar();
    },
    false
  );

  document.getElementById("borrarJuego").addEventListener(
    "click",
    function () {
      plantilla.eliminarTodoContenido();
      insertarPlantillasTiendaInicio();
      asignarEventosHeaderAdmin();
      plantilla.eliminarPresentacion();
      plantilla.insertarPlantillaDivEliminar();
      funcionesFirebase.mostrarTodosProductosEliminar();
    },
    false
  );

  document.getElementById("cerrarSesion").addEventListener(
    "click",
    function () {
      juegosCarrito = [];
      plantilla.eliminarTodoContenido();
      cambiarIdBody();
      plantillaLogin.mostrarLogin();
      funcionesLogin.asignarEventosLogin();
    },
    false
  );
}

function asignarEventosCrearProducto() {
  document.getElementById("enviarFormProducto").addEventListener(
    "click",
    function () {
      let juego = obtenerDatosFormulario();
      let objeto = crearObjetoJuego(juego);
      funcionesFirebase.anyadirJuego(objeto);
      plantilla.eliminarTodoContenido();
      insertarPlantillasTiendaInicio();
      plantilla.eliminarPresentacion();
      plantilla.insertarMensajePersonalidadoBien(
        "Juego añadido de manera satisfactoria"
      );
      asignarEventosHeaderAdmin();
    },
    false
  );
}

/**
 * Asigno los eventos para eliminar el producto.
 * @param {String} idHtml
 * @param {String} id
 */
function asignarEventoEliminarProducto(idHtml, id) {
  document.getElementById(idHtml).addEventListener(
    "click",
    function () {
      funcionesFirebase.eliminarJuego(id);
      plantilla.eliminarTodoContenido();
      insertarPlantillasTiendaInicio();
      plantilla.eliminarPresentacion();
      plantilla.insertarMensajePersonalidadoBien(
        "Producto eliminado de manera satisfactoria"
      );
      asignarEventosHeaderAdmin();
    },
    false
  );
}
function crearObjetoJuego(datos) {
  let juego = {
    nombre: datos[0],
    pegi: datos[1],
    plataforma: datos[2],
    precio: datos[3],
    imagen: datos[4],
  };

  return juego;
}

function asignarEventoActualizarProducto(idHtml, id) {
  document.getElementById(idHtml).addEventListener(
    "click",
    function () {
      let precio = obtenerPrecioFormulario(`formPrecio${id}`);
      if (precio != false) {
        funcionesFirebase.actualizarJuego(id, precio);
        plantilla.eliminarTodoContenido();
        insertarPlantillasTiendaInicio();
        plantilla.eliminarPresentacion();
        plantilla.insertarMensajePersonalidadoBien(
          "Producto actualizado de manera satisfactoria"
        );
        asignarEventosHeaderAdmin();
      } else {
        plantilla.eliminarTodoContenido();
        insertarPlantillasTiendaInicio();
        plantilla.eliminarPresentacion();
        plantilla.insertarMensajePersonalidadoMal(
          "Inserta los valores correctamente"
        );
        asignarEventosHeaderAdmin();
      }
    },
    false
  );
}

/**
 * Inserto los productos del carrito.
 */
function insertarProductosCarrito() {
  let precioTotal = 0;
  if (juegosCarrito.length != 0) {
    for (let i = 0; i < juegosCarrito.length; i++) {
      precioTotal += juegosCarrito[i].precio;
      plantilla.imprimirProductoCarrito(juegosCarrito[i]);
    }
    plantilla.insertarPlantillaFinalizarCompra(precioTotal.toFixed(2));
    asignarEventoComprar();
  } else {
    if (document.getElementById("carritoVacio") == null)
      plantilla.imprimirAvisoCarritoVacio();
  }
}

/**
 * Asigno los eventos para añadir los productos al carrito.
 * @param {String} id
 * @param {Object} producto
 */
function asignarEventoAnyadirProductoCarrito(id, producto) {
  document.getElementById(`anyadirJuego${id}`).onclick = function () {
    new bootstrap.Toast(document.querySelector(`#toast${id}`)).show();
    juegosCarrito.push(producto);
  };
}

/**
 * Asigno los eventos para finalizar la compra.
 */
function asignarEventoComprar() {
  document.getElementById("comprar").addEventListener(
    "click",
    function () {
      juegosCarrito = [];
      plantilla.eliminarCarrito();
      plantilla.insertarPlantillaDivCarrito();
      //plantilla.insertarPlantillaPedidoRealizado();
    },
    false
  );
}

/**
 * Cambio el ID del body.
 */
function cambiarIdBody() {
  if (document.getElementById("tiendaAdmin") == null) {
    if (document.getElementById("login") != null) {
      document.getElementById("login").id = "tienda";
    } else {
      document.getElementById("tienda").id = "login";
    }
  } else {
    cambiarIdBodyAdmin();
  }
}

function cambiarIdBodyAdmin() {
  if (document.getElementById("login") != null) {
    document.getElementById("login").id = "tiendaAdmin";
  } else {
    document.getElementById("tiendaAdmin").id = "login";
  }
}

function obtenerPrecioFormulario(id) {
  let form = document.getElementById(id);
  let precio = form[0].value;
  if (precio < 0 || precio == "") {
    return false;
  } else {
    return precio;
  }
}
function obtenerDatosFormulario() {
  let form = document.getElementById("formCrearProducto");
  let juego = [];
  for (let i = 0; i < form.length - 1; i++) {
    if (i == form.length - 2 && form[i].value == "") {
      juego.push(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXCqn3WKoi7CBqN49xpQ9m3q_CR0cl-eZiT1ZXwak-rIGCTTVojV3ig49o8ikrTa-jns&usqp=CAU"
      );
    } else {
      juego.push(form[i].value);
    }
  }
  return juego;
}
/**
 * TODO: EXPORTS.
 */
export {
  mostrarTiendaInicioAdmin,
  mostrarTiendaInicio,
  asignarEventoAnyadirProductoCarrito,
  asignarEventoEliminarProducto,
  asignarEventoActualizarProducto,
};
