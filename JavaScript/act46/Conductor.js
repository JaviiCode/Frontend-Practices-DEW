export class Conductor{
    constructor(id, Nombre, FechaNacimiento, Puntos, Monto, MontoConDescuento){
        this.id = id;
        this.Nombre = Nombre;
        this.FechaNacimiento = FechaNacimiento;
        this.Monto = Monto;
        this.MontoConDescuento = MontoConDescuento;
        this.Puntos = 12;    
        this.vehiculos = [];
        this.Infracciones = [];
    }
}