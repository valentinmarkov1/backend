class Sobremi {
    constructor (nombre,apellido,mascota,libros){
        this.nombre= nombre;
        this.apellido= apellido;
        this.mascota= mascota;
        this.libros= libros;
    }
}

const persona = new Sobremi ('Valentin' ,'Markov', 'Perro', 'No leo libros')
console.log (persona)