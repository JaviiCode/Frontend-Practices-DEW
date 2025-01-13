import {Registros} from '/Registros.js';

const regisroTabla = document.getElementById('regisroTabla').getElementsByTagName('tbody')[0];
const conjuntoRegistros = [];
let contador = 0;

document.getElementById("btnAgregar").addEventListener("click", (e) => {
    e.preventDefault()
    
    
    let fecha = document.getElementById("fecha").value;
    let concepto = document.getElementById("concepto").value;
    let cantidad = document.getElementById("cantidad").value;
    let caja = document.getElementById("caja").value;
    let Formulario = document.getElementById("Formulario").value;

    
    

    
    const nuevaFila = regisroTabla.insertRow();
    nuevaFila.insertCell().textContent = contador;
    nuevaFila.insertCell().textContent = fecha;
    nuevaFila.insertCell().textContent = concepto;
    nuevaFila.insertCell().textContent = cantidad;

    //Guardo informacion en un array
    contador++;
    let registro = new Registros(contador, fecha, concepto, cantidad, caja);
    conjuntoRegistros.push(registro);
    console.log(conjuntoRegistros);

})



document.getElementById("filtrar").addEventListener("click", () => {
    let filtroConcepto = document.getElementById("conceptoFiltro").value;
    let filtroCaja = document.getElementById("cajaFiltro").value;

    regisroTabla.innerHTML = "";
    // Iterar sobre los registros
    conjuntoRegistros.forEach((registro) => {
        console.log(registro.concepto);
        if (registro.concepto=== filtroConcepto && registro.caja === filtroCaja) {
            // Crear una nueva fila
            const nuevaFila = regisroTabla.insertRow();

            nuevaFila.insertCell().textContent = registro.id; 
            nuevaFila.insertCell().textContent = registro.fecha;
            nuevaFila.insertCell().textContent = registro.concepto;
            nuevaFila.insertCell().textContent = registro.cantidad;
        }
    });


});

document.getElementById("restaurar").addEventListener("click", () => {


    regisroTabla.innerHTML = "";
    // Iterar sobre los registros
    conjuntoRegistros.forEach((registro) => {;
        
            const nuevaFila = regisroTabla.insertRow();

            nuevaFila.insertCell().textContent = registro.id; 
            nuevaFila.insertCell().textContent = registro.fecha;
            nuevaFila.insertCell().textContent = registro.concepto;
            nuevaFila.insertCell().textContent = registro.cantidad;
    });
});


