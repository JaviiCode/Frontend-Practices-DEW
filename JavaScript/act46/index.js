import {Modelo} from './Modelo.js';
import {Marca} from './Marca.js';
import {Vehiculos} from './Vehiculos.js';

modeloBMW = new Modelo(1, "BMW a1");
marcaBMW = new Marca(1, "BMW");

this.Modelo.push(modeloBMW);

vehiculo1 = new Vehiculos(marcaBMW, Modelo[0], "25-1-2026");

this.vehiculosAsociados.push(vehiculo1);

console.log(vehiculosAsociados[0]);