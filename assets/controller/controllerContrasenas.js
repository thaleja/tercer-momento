import { contrasenas } from "../model/modelContrasenas.js";
console.log(contrasenas)

let btnIniciar = document.getElementById('btnIniciar')
btnIniciar.addEventListener('click', function () {
    console.log('iniciando sesion')
    document.getElementById('spinner').style.display = "block";
    setTimeout(() => {
        document.getElementById('spinner').style.display = "none";
        document.getElementById('login').style.display = "none";
        document.getElementById('panel').style.display = "block";
    }, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
    const btnRegistraR = document.getElementById('btnRegistraR');
    btnRegistraR.addEventListener('click', validarRegistro);
  });
  
  function validarRegistro() {
    // Aquí puedes agregar lógica adicional para validar el formulario de registro antes de enviarlo al servidor
    alert('Formulario de registro validado con éxito');
    // Agrega aquí la lógica para enviar los datos al servidor si es necesario
  }
  