"use strict";

/**
 * Me creo las plantillas necesarias tanto para el login como para el registro.
 */
const plantillaLogin = `<div id="contenidoPrincipal">
                            <div class="container w-75 bg-primary mt-5 rounded shadow mb-4" id="contenedorPrincipal">
                                <div class="row align-items-stretch">
                                        <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-5rounded" ></div>
                                        <div class="col bg-white p-4 rounded-end">
                                            <div class="text-end">
                                                <img src="img/logo.png" width="48" alt="Logo" />
                                            </div>
                                            <h2 class="fw-bold text-center py-5">Bienvenido</h2>
                                            <form id="formSesion">
                                                <div class="mb-4">
                                                    <label for="email" class="form-label">Correo electrónico</label>
                                                    <input type="email" class="form-control" name="email" />
                                                </div>
                                                <div class="mb-4">
                                                    <label for="password" class="form-label">Contraseña</label>
                                                    <input type="password" class="form-control" name="password" />
                                                </div>
                                                <div class="d-grid">
                                                <button type="button" class="btn btn-primary" id="iniciarSesion">
                                                    Iniciar sesión
                                                </button>
                                                </div>
                                                <div class="my-3">
                                                <span><a href="#" id="registro">Regístrate</a></span>
                                                </div>
                                            </form>
                                        </div>
                                </div>
                            </div>
                        </div>`;

const plantillaRegistro = `<div id="contenidoPrincipal">
                                <div class="container w-75 bg-primary mt-5 rounded shadow mb-4">
                                    <div class="row align-items-stretch">
                                            <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-5 rounded" ></div>
                                            <div class="col bg-white p-4 rounded-end">
                                                <div class="text-end">
                                                    <img src="img/logo.png" width="48" alt="Logo" />
                                                </div>
                                                <h2 class="fw-bold text-center py-5">¡Regístrate!</h2>
                                                <form id="formRegistro">
                                                    <div class="mb-4">
                                                        <label for="nombre" class="form-label">Nombre</label>
                                                        <input type="text" class="form-control" name="nombre" />
                                                    </div>
                                                    <div class="mb-4">
                                                        <label for="apellidos" class="form-label">Apellidos</label>
                                                        <input type="text" class="form-control" name="apellidos" />
                                                    </div>
                                                    <div class="mb-4">
                                                        <label for="email" class="form-label">Correo electrónico</label>
                                                        <input type="email" class="form-control" name="email" />
                                                    </div>
                                                    <div class="mb-4">
                                                        <label for="password" class="form-label">Contraseña</label>
                                                        <input type="password" class="form-control" name="password" placeholder="123456" />
                                                    </div>
                                                    <div class="d-grid">
                                                    <button type="button" class="btn btn-primary" id="crearCuenta">
                                                        Crear cuenta
                                                    </button>
                                                    </div>
                                                </form>
                                            </div>
                                    </div>
                                </div>
                            </div>`;

const plantillaError = `<div class="alert alert-danger row align-items-center" id="mensajeError">MENSAJE</div>`;

const body = document.getElementById("main");

/**
 ** Inserto la plantilla de del Login después del div#main.
 */
function insertarPlantillaLogin() {
  body.insertAdjacentHTML("afterbegin", plantillaLogin);
}

/**
 * Inserto la plantilla de del Registro después del div#main.
 */
function insertarPlantillaRegistro() {
  body.insertAdjacentHTML("afterbegin", plantillaRegistro);
}

/**
 ** Elimino todo el contenido del HTML menos el div#main.
 */
function eliminarTodoContenido() {
  body.removeChild(document.getElementById("contenidoPrincipal"));
}

/**
 ** Elimino todo el contenido e imprimo el Login.
 */
function mostrarLogin() {
  eliminarTodoContenido();
  insertarPlantillaLogin();
}

/**
 ** Elimino todo el contenido e imprimo el Registro.
 */
function mostrarRegistro() {
  eliminarTodoContenido();
  insertarPlantillaRegistro();
}

/**
 ** Muestro el error.
 * @param {String} mensajeError
 */
function mostrarError(mensajeError) {
  let divError = modificarPlantillaError(mensajeError);
  document
    .getElementById("contenedorPrincipal")
    .insertAdjacentHTML("afterbegin", divError);
}

/**
 * Devuelvo el div indicando el error.
 * @param {String} mensajeError
 * @returns @param {String}
 */
function modificarPlantillaError(mensajeError) {
  return plantillaError.replace("MENSAJE", mensajeError);
}

/**
 * TODO: EXPORTS.
 */
export {
  insertarPlantillaLogin,
  eliminarTodoContenido,
  mostrarLogin,
  mostrarRegistro,
  mostrarError,
};
