function getFullName(texto) {
    const x = texto
    return function (nombre,apellido){
        return `Mi nombre es: ${nombre} ${apellido}`;
    }
}
const nombreCompleto = getFullName ();

console.log (nombreCompleto('Valentin Markov'));