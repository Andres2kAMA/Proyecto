"use strict";

const plantillaLogin = `<div id="contenidoPrincipal">
                            <div class="container w-75 bg-primary mt-5 rounded shadow mb-4">
                                <div class="row align-items-stretch">
                                        <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-5rounded" ></div>
                                        <div class="col bg-white p-4 rounded-end">
                                            <div class="text-end">
                                                <img src="img/logo.png" width="48" alt="Logo" />
                                            </div>
                                            <h2 class="fw-bold text-center py-5">Bienvenido</h2>
                                            <form action="#">
                                                <div class="mb-4">
                                                    <label for="email" class="form-label">Correo electrónico</label>
                                                    <input type="email" class="form-control" name="email" />
                                                </div>
                                                <div class="mb-4">
                                                    <label for="password" class="form-label">Contraseña</label>
                                                    <input type="password" class="form-control" name="password" />
                                                </div>
                                                <div class="d-grid">
                                                <button type="submit" class="btn btn-primary">
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
                                                        <input type="password" class="form-control" name="password" />
                                                    </div>
                                                    <div class="d-grid">
                                                    <button type="submit" class="btn btn-primary" id="crearCuenta">
                                                        Crear cuenta
                                                    </button>
                                                    </div>
                                                </form>
                                            </div>
                                    </div>
                                </div>
                            </div>`;

const body = document.getElementById("main");

/**
 * Funciones para insertar las plantillas creadas anteriormente.
 */
function insertarPlantillaLogin() {
  body.insertAdjacentHTML("afterbegin", plantillaLogin);
}

function insertarPlantillaRegistro() {
  body.insertAdjacentHTML("afterbegin", plantillaRegistro);
}

/**
 * Función para eliminar todo el contenido del HTML menos el div 'main'.
 */
function eliminarTodoContenido() {
  body.removeChild(document.getElementById("contenidoPrincipal"));
}

/**
 * JUNTO VARIAS FUNCIONES PARA MOSTRAR EL LOGIN.
 */
function mostrarLogin() {
  eliminarTodoContenido();
  insertarPlantillaLogin();
}

export {
  insertarPlantillaLogin,
  insertarPlantillaRegistro,
  eliminarTodoContenido,
  mostrarLogin,
};
