ConvertCSVDataToTree = (csvArray) => {
    // Obtenemos el arreglo de objetos desde p2
    const csvData = csvArray;
    // Hacemos un shift al arreglo para obtener la cabecera del archivo csv, será útil para decidir el tipo de cada Nodo. 
    const types = csvData.shift();

    const result = [];
    const tree = {result};
    
    /**
     * 
     *  Lógica de la función:
     *  1. Verifica si el valor actual de la key (nombre) existe el nodo anterior (node)
     *  2. Si no existe, crea un objeto auxiliar, según el índice decide cuál es el tipo del nodo
     *  estructura types: [Sede,Curso,Seccion,Oferta] => indices según iteración [0,1,2,3]
     *  3. Una vez definido el objeto auxiliar, hace un push al arreglo result que serán los hijos y luego lo devuelve al objeto tree
     *  4. El objeto tree es una referencia del arreglo result que será retornado por la función, de esta forma al hacer el push al objeto tree
     *  lo que estamos haciendo es estructurando el arreglo result en base al objeto tree con el fin de obtener la estructura [{var,foo,zoo,etc..}] del árbol.
     */
    csvData.forEach(row => {
        // La estructura del callback es valorAnterior, valorActual, indice
        // Utilizamos como llave "nombre" para simular la estructura del árbol de p1
        row.reduce((node, nombre, index) => {
            if (!node[nombre]) {
                const currentNode = {nombre}
                node[nombre] = {result: []}
                currentNode.tipo = types[index]
                currentNode.hijos = node[nombre].result
                node.result.push(currentNode)
            }
            return node[nombre]
        }, tree)
    });
    // Retornamos el arreglo result con los objetos ya estructurados y sus hijos.
    return result;
  }

  module.exports = {
    ConvertCSVDataToTree: ConvertCSVDataToTree
  }