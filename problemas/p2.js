/**
 * Problema número 2.
 * 
 * Genera un script/algoritmo/función que sea capaz de transformar los datos de input-p2.csv
 * en un arból de estructura similar al problema de p1 utilizando la estructura de Nodo.js
 */

const Nodo = require("./src/Nodo");
// const ParseCSV = require("./src/ParseCsv");
const raiz = new Nodo("root", "Raíz");

// const csv = new ParseCSV();
//Agregar a raiz toda la estructura solicitada.
//...

// console.log(raiz);

const parse = require('csv-parse')
const fs = require('fs') 

filename = './src/input-p2.csv';

const data = []
fs.createReadStream(filename)
  .pipe(parse({ delimiter: ',' }))
  .on('data', (r) => {
    console.log(r);
    data.push(r);        
  })
  .on('end', () => {
    // console.log(data);
    console.log('OK');
  });