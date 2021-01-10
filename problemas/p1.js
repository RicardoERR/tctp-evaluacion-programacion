/**
 * Problema número 1.
 *
 * Necesitamos que obtengas los datos de ./src/input-p1.json y generes funciones que permitan:
 *
 * 1. Retornar todos los nodos que no tienen hijos.
 * 2. Retornar todos los nodos que contienen una cantidad X (parametrizable) de hijos
 * 3. Contabilizar la cantidad de nodos totales
 * 4. Retornar todas las Sedes con 4° Medio que *SI* poseen la *Oferta Tecnología* en sus *Secciones A*
 */

const data = require("./src/input-p1.json");
// console.log(data);

// Instanciamos al estructura JsonTreeParser que será la encargada de la lógica necesaria para el problema.
const JsonTreeParser = require('./src/JsonTreeParser')
const JsonTreeParserObj = new JsonTreeParser(data);

console.log(JsonTreeParserObj.countTotalNodes());

// Para utilizar la función filterNodeByOffer de la estructura JsonTreeParser enviaremos un payload con el Curso, la Oferta y la Sección a Filtrar
// De esta forma podemos hacer un filtro más dinámico según sea necesario.
var payload = {
    offeredCourse: "Tecnología",
    gradeName: "4 Medio",
    sectioName: "A"
};
console.log(JsonTreeParserObj.filterNodeByOffer(payload));
// Enviamos la cantidad de hijos que deben tener los nodos a filtrar
console.log(JsonTreeParserObj.getNodesByAmountOfChildrens(4));

console.log(JsonTreeParserObj.showChidlessNodes());