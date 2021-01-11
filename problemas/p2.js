/**
 * Problema número 2.
 * 
 * Genera un script/algoritmo/función que sea capaz de transformar los datos de input-p2.csv
 * en un arból de estructura similar al problema de p1 utilizando la estructura de Nodo.js
 */

const Nodo = require("./src/Nodo");

const parse = require('csv-parse/lib/sync')
const fs = require('fs'); 
const { ConvertCSVDataToTree } = require("./src/p2-utils/ParseCsvToTree");

const raiz = new Nodo("root", "Raíz");
//Agregar a raiz toda la estructura solicitada.
//...
console.log(raiz);

// Declaramos la ruta del archivo csv a leer
const filename = './src/input-p2.csv';

// Utilizamos la librería fs para leer el archivo CSV y luego la librería csv-parse para parsear los datos un arreglo de objetos que luego serán utilizados
const CSVdata = fs.readFileSync(filename).toString();
const records = parse(CSVdata, {delimiter: ',', skip_empty_lines: true});

// Llamamos a la función util CSVConvertData que se encargará de leer el arreglo de objetos y se encargará de crear el árbol con padres e hijos.
raiz.hijos = ConvertCSVDataToTree(records);
console.log('Nodo ya con arbol de estructura similiar a p1: ,',raiz);