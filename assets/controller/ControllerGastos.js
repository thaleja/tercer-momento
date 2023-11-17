import { gastos } from "../model/ModelGastos.js";
console.log(gastos)

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
    document.getElementById('sectionRegistrarGastos').style.zIndex = '3'
    document.getElementById('sectionListarGastos').style.zIndex = '2'
    document.getElementById('sectionMovimientosGastos').style.zIndex = '2'
})

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
    movimientos()
})

let listarGastos = document.getElementById('listarGastos')

listarGastos.addEventListener('click', function () {
    document.getElementById('sectionRegistrarGastos').style.zIndex = '2'
    document.getElementById('sectionListarGastos').style.zIndex = '3'
    document.getElementById('sectionMovimientosGastos').style.zIndex = '2'
    gastos.map((gasto)=>{
        console.log(gasto)
    })
})
let movimientosGastos = document.getElementById('movimientosGastos')
movimientosGastos.addEventListener('click', function () {
    document.getElementById('sectionRegistrarGastos').style.zIndex = '2'
    document.getElementById('sectionListarGastos').style.zIndex = '2'
    document.getElementById('sectionMovimientosGastos').style.zIndex = '3'

})

function movimientos(){
    console.log("Guardando movimiento")
}


document.addEventListener('DOMContentLoaded', function () {
    const btnRegistraR = document.getElementById('btnRegistraR');
    btnRegistraR.addEventListener('click', validarRegistro);
});

function validarRegistro() {
    // Aquí puedes agregar lógica adicional para validar el formulario de registro antes de enviarlo al servidor
    alert('Formulario de registro validado con éxito');
    // Agrega aquí la lógica para enviar los datos al servidor si es necesario
}


