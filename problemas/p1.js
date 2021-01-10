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

console.log("1. Nodos que no tienen hijos: ",JsonTreeParserObj.showChidlessNodes());

// Enviamos la cantidad de hijos que deben tener los nodos a filtrar
console.log("2. Nodos que contienen 4 hijos: ",JsonTreeParserObj.getNodesByAmountOfChildrens(4));

console.log("3. Cantidad de nodos totales: ",JsonTreeParserObj.countTotalNodes());
// Para utilizar la función filterNodeByOffer de la estructura JsonTreeParser enviaremos un payload con el Curso, la Oferta y la Sección a Filtrar
// De esta forma podemos hacer un filtro más dinámico según sea necesario.
var payload = {
    offeredCourse: "Tecnología",
    gradeName: "4 Medio",
    sectionName: "A"
};
console.log("4. Todas las sedes con 4 Medio que sí poseen la oferta Tecnología en sus secciones A: ",JsonTreeParserObj.filterNodeByOffer(payload));
