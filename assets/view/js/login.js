document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
document.getElementById("btnRegistrar").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

// Declarando variables
var form_login = document.querySelector(".form-login");
var form_registro = document.querySelector(".form-registro");
var login_registro = document.querySelector(".login-registro");
var cajaTraseraLogin = document.querySelector(".cajaTraseraLogin");
var cajaTraseraRegistro = document.querySelector(".cajaTraseraRegistro");
var spinner = document.getElementById("spinner");
var panel = document.getElementById("panel");
// FUNCIONES
function anchoPage() {
  if (window.innerWidth > 850) {
    form_login.style.display = "block";
    form_registro.style.display = "block";
    login_registro.style.left = "0px";
    cajaTraseraRegistro.style.display = "block";
    cajaTraseraRegistro.style.opacity = "1";
    cajaTraseraLogin.style.display = "block";
    cajaTraseraLogin.style.opacity = "1";
  } else {
    form_login.style.display = "block";
    form_registro.style.display = "none";
    login_registro.style.left = "0px";
    cajaTraseraRegistro.style.display = "block";
    cajaTraseraRegistro.style.opacity = "1";
    cajaTraseraLogin.style.display = "none";
  }
}

anchoPage();

function iniciarSesion() {

  if (window.innerWidth > 850) {
    form_login.style.display = "block";
    form_registro.style.display = "none";
    login_registro.style.left = "10px";
    cajaTraseraRegistro.style.opacity = "1";
    cajaTraseraLogin.style.opacity = "0";
  } else {
    form_login.style.display = "block";
    form_registro.style.display = "none";
    login_registro.style.left = "0px";
    cajaTraseraRegistro.style.display = "block";
    cajaTraseraLogin.style.display = "none";
  }
}


function register() {
  if (window.innerWidth > 850) {
    form_registro.style.display = "block";
    form_login.style.display = "none";
    login_registro.style.left = "410px";
    cajaTraseraRegistro.style.opacity = "0";
    cajaTraseraLogin.style.opacity = "1";
  } else {
    form_registro.style.display = "block";
    form_login.style.display = "none";
    login_registro.style.left = "0px";
    cajaTraseraRegistro.style.display = "none";
    cajaTraseraLogin.style.display = "block";
    cajaTraseraLogin.style.opacity = "1";
  }
}

//el codigo para  iniciar sesion
document.addEventListener("DOMContentLoaded", function () {
  let sesion = {
    usuarioActual: null,
  };

  // Cambiamos el evento a click en el botón de inicio de sesión
  document.getElementById("btnIniciar").addEventListener("click", validarFormulario);
 
  let inputs = document.querySelectorAll(".controls");
  inputs.forEach(function (input) {
    input.addEventListener("input", validarFormulario);
  });

  function validarFormulario(e) {
    let inputName = e.target.name;
    let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let usuario = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let contrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    switch (inputName) {
      case "usuario":
        validarCampo(e.target, usuario);
        break;
      case "contrasena":
        validarCampo(e.target, contrasena);
        break;
      case "correo":
        validarCampo(e.target, correo);
        break;
      case "usuarioRegistro":
        validarCampo(e.target, usuario);
        break;
      case "contrasenaRegistro":
        validarCampo(e.target, contrasena);
        break;
      case "correoRegistro":
        validarCampo(e.target, correo);
        break;
    }

    // Obtén los valores de usuario y contraseña directamente
    let usuarioValue = document.getElementById("usuario").value;
    let contrasenaValue = document.getElementById("contrasena").value;

    if (usuario.test(usuarioValue) && contrasena.test(contrasenaValue)) {
      // Almacenar el usuario en la variable de sesión
      sesion.usuarioActual = usuarioValue;
      // Actualizar el nombre del usuario en la sección del panel
      actualizarNombreUsuario();
      // Puedes realizar acciones adicionales después de iniciar sesión, si es necesario
     
    }
  }

  function validarCampo(elemento, expresionRegular) {
    if (expresionRegular.test(elemento.value)) {
      elemento.style.backgroundColor = "green";
    } else {
      elemento.style.backgroundColor = "red";
    }
  }

  function actualizarNombreUsuario() {
    let nombreUsuarioSpan = document.getElementById("nombreUsuarioSpan");
    if (nombreUsuarioSpan) {
      nombreUsuarioSpan.textContent = sesion.usuarioActual;
    }
  }
});

