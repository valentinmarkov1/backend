class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    static getFullName= 'Valentin Markov' 
    static getBook= 'Harry Potter' 
    static countMascotas= '2' 
    
}


const persona= new Usuario('Valentin', 'Markov','nombre : Harry Potter autor: JK Rowlling', 'Perro,Gato')
console.log (persona);
console.log(Usuario.getFullName);
console.log(Usuario.getBook);
console.log(Usuario.countMascotas);