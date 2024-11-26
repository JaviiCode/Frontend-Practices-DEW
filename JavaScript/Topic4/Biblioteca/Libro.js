export class Libro {
  constructor(Titulo, Autor, Anio, Prestado) {
    this.Titulo = Titulo;
    this.Autor = Autor;
    this.Anio = Anio;
    this.Prestado = false;
  }

  prestar() {
    if (Prestado == false) {
      this.Prestado == true;
      console.log(`El libro "${Libro.titulo}" a sido prestado correctamente.`);
    } else {
      console.log(`El libro "${Libro.titulo}" ya esta prestado`);
    }
  }
  devolver() {
    if (Prestado == true) {
      this.Prestado == false;
      console.log(`El libro "${Libro.titulo}" a sido devuelto correctamente.`);
    } else {
      console.log(`El libro "${Libro.titulo}"  ya a sido devuelto anteriormente`);
    }
  }
}
