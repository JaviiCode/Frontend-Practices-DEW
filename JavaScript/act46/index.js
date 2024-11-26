import {Modelo} from './Modelo.js';
import {Marca} from './Marca.js';
import {Vehiculos} from './Vehiculos.js';
import {Conductor} from './Conductor.js';

//Parte de crear vehiculo con todos sus datos
let vehiculosAsociados = [];

let marcaBMW = new Marca(1, "BMW");
let modeloBMW = new Modelo(1, "BMW a1");

marcaBMW.Modelo.push(modeloBMW);

let vehiculo1 = new Vehiculos(marcaBMW, marcaBMW.Modelo[0], "25-1-2026");

vehiculosAsociados.push(vehiculo1);

//Asocio un conductor con su vehiculo.
let conductor1 = new Conductor(1, "Javi", "25-07-2024", vehiculosAsociados[0]);
console.log(conductor1);

