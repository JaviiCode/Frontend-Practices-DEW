import {Modelo} from './Modelo.js';
import {Marca} from './Marca.js';
import {Vehiculos} from './Vehiculos.js';
import {Conductor} from './Conductor.js';
import {Infraccion} from './Infraccion.js';

//Array vehiculosAsociados
let vehiculosAsociados = [];


//Creo una marca y un modelo.
let marcaBMW = new Marca(1, "BMW");
let modeloBMW = new Modelo(1, "BMW a1");

//Asocio el modelo a la Marca.
marcaBMW.Modelo.push(modeloBMW);

//Creo un nuevo objeto vehiculo y le añado todos los datos
let vehiculo1 = new Vehiculos(marcaBMW, marcaBMW.Modelo[0], "25-1-2026");

//Asocio un conductor con su vehiculo.
let conductor1 = new Conductor(1, "Javi", "25-07-2024");
conductor1.vehiculos.push(vehiculo1);


let infraccion1 = new Infraccion(1, "Exceso de velocidad", 25, "Grave");
let infraccion2 = new Infraccion(2, "Salto de stop", 40, "Leve");
let infraccion3 = new Infraccion(3, "Exceso de alcohol", 120, "Grave");
let infraccion4 = new Infraccion(4, "Exceso de drogas", 200, "Grave");

conductor1.Infracciones.push(infraccion1, infraccion2, infraccion3);

    //Condicionales para calcular el descuento total.
    if(conductor1.Infracciones.length > 0 && conductor1.Infracciones.length <= 3){
        let sumaInfracciones = 0;
        for(let i = 0; i < conductor1.Infracciones.length; i++){
            sumaInfracciones += conductor1.Infracciones[i].Monto;
        }

        conductor1.Monto = sumaInfracciones;
        let montoFinal = sumaInfracciones - (sumaInfracciones * 20 / 100);
        conductor1.MontoConDescuento = montoFinal;

        console.log(`El conductor ${conductor1.Nombre} tiene un 20% de descuento en sus infracciones. La multa total se le queda en ${montoFinal}`);
    }
    if(conductor1.Infracciones.length == 1){
        let sumaInfracciones = 0;
        for(let i = 0; i < conductor1.Infracciones.length; i++){
            sumaInfracciones += conductor1.Infracciones[i].Monto;
        }

        conductor1.Monto = sumaInfracciones;
        let montoFinal = sumaInfracciones - (sumaInfracciones * 50 / 100);
        conductor1.MontoConDescuento = montoFinal;
        console.log(`El conductor ${conductor1.Nombre} tiene un 50% de descuento en sus infracciones. La multa total se le queda en ${montoFinal}`);
    }
    if(conductor1.Infracciones.length >3){
        console.log(`El conductor ${conductor1.Nombre} no tiene derecho a descuento`);
    }

    //Restar puntos segun la gravedad de la infraccion.
    for(let i = 0; i < conductor1.Infracciones.length; i++){
        console.log("hola");
        if(conductor1.Infracciones[i].gravedadInfraccion === "Grave"){
            conductor1.Puntos -= 3;
        }
        if(conductor1.Infracciones[i].gravedadInfraccion === "Leve"){
            conductor1.Puntos -= 1;
        }
    }
    

    

    console.log("Datos del conductor.");
    console.log(conductor1);

    



