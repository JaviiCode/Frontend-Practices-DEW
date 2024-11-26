import {Libro} from './Libro.js';

class Biblioteca{
    constructor (Nombre){
        this.Nombre = Nombre;
        this.Libros = [];
    }

    agregarLibro(libro){
        this.Libros.push(libro);
        console.log(`Libro "${libro.Titulo}" añadido a biblioteca`);
    }

    eliminarLibro(titulo){
        let indiceLibro = this.Libros.findIndex(libro => libro.Titulo === titulo);
        if(indiceLibro != -1){
            this.Libros.slice(indiceLibro, 1);
            console.log(`Libro con id: "${indiceLibro}" eliminado correctamente.`);
        }else{
            console.log(`No se encontró el libro con la id "${indiceLibro}"`)
        }
    }
    
}

const libro1 = new Libro("Pinocho", "Javi", 1992, false);
const biblioteca = new Biblioteca("Biblioteca de Javi");
biblioteca.agregarLibro(libro1);