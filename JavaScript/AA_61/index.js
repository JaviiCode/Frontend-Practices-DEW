const regisroTabla = document.getElementById('regisroTabla').getElementsByTagName('tbody')[0];
const registros = [];

document.getElementById("btnAgregar").addEventListener("click", (e) => {
    let contador = 0;
    contador++;
    e.preventDefault();
    /*const fechaInput = fecha.value;
    const conceptoInput = concepto.value;
    const cantidadInput = cantidad.value;
    const cajaDrop = caja.value;
    console.log(fechaInput);*/
    let fecha = document.getElementById("fecha").value;
    let concepto = document.getElementById("concepto").value;
    let cantidad = document.getElementById("cantidad").value;
    let caja = document.getElementById("caja");
    let Formulario = document.getElementById("Formulario").value;

    registros.push(contador, fecha, concepto, cantidad, caja);
    const nuevaFila = regisroTabla.insertRow();
    nuevaFila.insertCell().textContent = contador;
    nuevaFila.insertCell().textContent = fecha;
    nuevaFila.insertCell().textContent = concepto;
    nuevaFila.insertCell().textContent = cantidad;
    nuevaFila.setAttribute.textContent = caja;
    //Formulario.reset();
})



document.getElementById("filtrar").addEventListener("click", (e) => {
    let filtroConcepto = document.getElementById("concepto").value;
    let filtroCaja = document.getElementById("caja").value;

    regisroTabla.innerHTML = "";

    // Iterar sobre los registros
    registros.forEach((registro) => {
        console.log("hola entre");
        if (registro.concepto === filtroConcepto && registro.caja === filtroCaja) {
            // Crear una nueva fila
            const nuevaFila = regisroTabla.insertRow();

            nuevaFila.insertCell().textContent = registro.contador; 
            nuevaFila.insertCell().textContent = registro.fecha;
            nuevaFila.insertCell().textContent = registro.concepto;
            nuevaFila.insertCell().textContent = registro.cantidad;
        }
    });


})

