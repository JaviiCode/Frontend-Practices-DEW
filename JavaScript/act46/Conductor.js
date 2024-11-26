export class Conductor{
    constructor(id,Nombre,FechaNacimiento){
        this.id = id;
        this.Nombre = Nombre;
        this.FechaNacimiento = FechaNacimiento; 
        this.vehiculos = [];
        this.Infracciones = [];
    }
}