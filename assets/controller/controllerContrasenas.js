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

let registrarGastos = document.getElementById('registrarGastos')
registrarGastos.addEventListener('click', function () {
    document.getElementById('sectionRegistrarGastos').innerHTML = '3'
    document.getElementById('sectionListarGastos').style.zIndex = '2'
    document.getElementById('sectionMovimientosGastos').style.zIndex = '2'
    document.getElementById('sectionCrear').style.zIndex = '2'
    contrasenas.map((password) => {
        /*singular del arreglo*/
        
    
    })
})

let listarGastos = document.getElementById('listarGastos')

listarGastos.addEventListener('click', function () {
    document.getElementById('sectionRegistrarGastos').style.zIndex = '2'
    document.getElementById('sectionListarGastos').style.zIndex = '3'
    document.getElementById('sectionMovimientosGastos').style.zIndex = '2'

})
let movimientosGastos = document.getElementById('movimientosGastos')
movimientosGastos.addEventListener('click', function () {
    document.getElementById('sectionRegistrarGastos').style.zIndex = '2'
    document.getElementById('sectionListarGastos').style.zIndex = '2'
    document.getElementById('sectionMovimientosGastos').style.zIndex = '3'

})

