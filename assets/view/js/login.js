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
let inputs = document.querySelectorAll(".controls");
inputs.forEach(function (input) {
  input.addEventListener("keyup", validarFormulario);
});

let correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let usuario = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let contrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

function validarFormulario(e) {
  let inputName = e.target.name;

  switch (inputName) {
    case "usuario":
      if (usuario.test(e.target.value)) {
        document.getElementById("usuario").style.backgroundColor = "green";
      } else {
        document.getElementById("usuario").style.backgroundColor = "red";
      }
      break;
    case "contrasena":
      if (contrasena.test(e.target.value)) {
        document.getElementById("contrasena").style.backgroundColor = "green";
        console.log(e.target.value);
      } else {
        document.getElementById("contrasena").style.backgroundColor = "red";
        console.log(e.target.value);
      }
      break;
    case "correo":
      if (correo.test(e.target.value)) {
        document.getElementById("correo").style.backgroundColor = "green";
      } else {
        document.getElementById("correo").style.backgroundColor = "red";
      }
      break;

    // Agregar lógica para el formulario de registro
    case "usuarioRegistro":
      if (usuario.test(e.target.value)) {
        document.getElementById("usuarioRegistro").style.backgroundColor = "green";
      } else {
        document.getElementById("usuarioRegistro").style.backgroundColor = "red";
      }
      break;
    case "contrasenaRegistro":
      if (contrasena.test(e.target.value)) {
        document.getElementById("contrasenaRegistro").style.backgroundColor = "green";
      } else {
        document.getElementById("contrasenaRegistro").style.backgroundColor = "red";
      }
      break;
    case "correoRegistro":
      if (correo.test(e.target.value)) {
        document.getElementById("correoRegistro").style.backgroundColor = "green";
      } else {
        document.getElementById("correoRegistro").style.backgroundColor = "red";
      }
      break;
  }
}
