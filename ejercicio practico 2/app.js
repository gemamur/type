// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
console.log(sumar(5, 5));
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
console.log(contar(superHeroes));
//Parametros por defecto
function llamarBatman(llamar) {
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
llamarBatman(true);
// Rest?
function unirheroes() {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
}
// Tipo funcion
function noHaceNada(numero, texto, booleano, arreglo) {
}
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco;
