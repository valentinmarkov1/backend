function Mascotas (texto){
    const x =texto;
    return function (mascotas){
        return x + mascotas;
    }
}

function addMascotas (texto){
    const x = texto;
    return function (nuevaMascota){
        return x + nuevaMascota;
    }
}


const animales = Mascotas ('Mis mascotas:');
console.log(animales ('perro,gato'));
const nueva = addMascotas ('Ahora somos 3:');
console.log (nueva('perro,gato,tortuga')) 


function countMascotas (mascotas) {
    if(mascotas.length=== 0){
        return 'No tengo Mascotas' ;
    } 
    return mascotas;
}
console.log (countMascotas([3]))