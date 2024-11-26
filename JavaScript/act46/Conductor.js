export class Conductor{
    constructor(id, Nombre, FechaNacimiento, Monto, MontoConDescuento){
        this.id = id;
        this.Nombre = Nombre;
        this.FechaNacimiento = FechaNacimiento;
        this.Monto = Monto;
        this.MontoConDescuento = MontoConDescuento;  
        this.vehiculos = [];
        this.Infracciones = [];
    }
}