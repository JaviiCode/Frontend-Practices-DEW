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


let infraccion1 = new Infraccion(1, "Exceso de velocidad", 25);
let infraccion2 = new Infraccion(2, "Salto de stop", 40);
let infraccion3 = new Infraccion(3, "Ecceso de alcohol", 120);
let infraccion4 = new Infraccion(4, "Ecceso de drogas", 200);

conductor1.Infracciones.push(infraccion1, infraccion2, infraccion3);
console.log(conductor1);

    if(conductor1.Infracciones.length > 3){
        console.log(`El conductor ${conductor1.Nombre} no tiene derecho a descuento`);
    }
    if(conductor1.Infracciones.length > 0 && conductor1.Infracciones.length <= 3){
        console.log("jols");
        let sumaInfracciones = 0;
        for(let i = 0; i < conductor1.Infracciones.length; i++){
            let infratest = conductor1.Infracciones[i].Monto;
            sumaInfracciones += conductor1.Infracciones[i].Monto;

        }
        let montoFinal = sumaInfracciones - (sumaInfracciones * 20 / 100);
        console.log(`El conductor ${conductor1.Nombre} tiene un 20% de descuento en sus infracciones. La multa total se le queda en ${montoFinal}`);
    }
    



