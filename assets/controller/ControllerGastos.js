import { gastos } from "../model/ModelGastos.js";
console.log(gastos);

// Objeto para gestionar la sesión
let sesion = {
  usuarioActual: null,
};

// Botón para iniciar sesión
let btnIniciar = document.getElementById('btnIniciar');
// Botón para cerrar sesión (renombrado a camelCase)
let cerrarSesionBtn = document.getElementById('cerrarSesion');

// Evento para iniciar sesión
btnIniciar.addEventListener('click', function () {
    console.log('Iniciando sesión');
    document.getElementById('spinner').style.display = "block";
    setTimeout(() => {
        document.getElementById('spinner').style.display = "none";
        document.getElementById('login').style.display = "none";
        document.getElementById('panel').style.display = "block";
        sesion.usuarioActual = document.getElementById("usuario").value; // Obtener el usuario del formulario de inicio de sesión
        actualizarNombreUsuario();
    }, 3000);
});

// Evento para cerrar sesión
cerrarSesionBtn.addEventListener('click', function () {
    cerrarSesion();
});

// Evento cuando se carga el contenido del documento
document.addEventListener('DOMContentLoaded', function () {
    const btnRegistraR = document.getElementById('btnRegistraR');
    btnRegistraR.addEventListener('click', validarRegistro);
});

// Función para validar el registro
function validarRegistro() {
    let mensajeExito = document.createElement('p');
    mensajeExito.textContent = 'Formulario de registro validado con éxito';
    mensajeExito.classList.add('mensaje-exito'); // Agrega una clase al elemento
    document.body.appendChild(mensajeExito);
}

// Función para cerrar sesión
function cerrarSesion() {
    // Elimina la información de la sesión (puedes implementar tu lógica específica)
    sesion.usuarioActual = null;

    // Actualiza el nombre del usuario en la sección del panel (puedes ajustarlo según tu lógica)
    actualizarNombreUsuario();

    // Oculta el panel actual y muestra el formulario de inicio de sesión
    document.getElementById('panel').style.display = "none";
    document.getElementById('login').classList.add("visible");
}

let registrarGastos = document.getElementById('registrarGastos');
registrarGastos.addEventListener('click', function () {
    document.getElementById('sectionRegistrarGastos').style.zIndex = '3';
    document.getElementById('sectionListarGastos').style.zIndex = '2';
    document.getElementById('sectionMovimientosGastos').style.zIndex = '2';
});

let btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", () => {
    let id = Math.random() * 100;
    let categoria = document.getElementById("categoria").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = document.getElementById("valor").value;

    let gasto = {
        id, categoria, descripcion, valor
    };

    gastos.push(gasto);
    movimientos();
});

let listarGastos = document.getElementById('listarGastos');

listarGastos.addEventListener('click', function () {
    document.getElementById('sectionRegistrarGastos').style.zIndex = '2';
    document.getElementById('sectionListarGastos').style.zIndex = '3';
    document.getElementById('sectionMovimientosGastos').style.zIndex = '2';
    
    gastos.map((gasto) => {
        console.log(gasto);
    });
});

let movimientosGastos = document.getElementById('movimientosGastos');
movimientosGastos.addEventListener('click', function () {
    document.getElementById('sectionRegistrarGastos').style.zIndex = '2';
    document.getElementById('sectionListarGastos').style.zIndex = '2';
    document.getElementById('sectionMovimientosGastos').style.zIndex = '3';
});

function movimientos() {
    console.log("Guardando movimiento");
}

function actualizarNombreUsuario() {
    let nombreUsuarioSpan = document.getElementById("nombreUsuarioSpan");
    if (nombreUsuarioSpan) {
        nombreUsuarioSpan.textContent = sesion.usuarioActual;
    }
}