require('./JsonTree.Utils')

module.exports = class JsonTreeParser  {
    data = [];
    flattendata = [];

    constructor(data = []){
        this.data = data;
        flattenJsonTree(this.data, this.flattendata); // Aplanamos el arbol de objetos que es obtenido del json, su utilidad se menciona abajo.
    }
    /*
        Para los métodos showChidlessNodes, getNodesByAmountOfChildrens y countTotalNodes lo que haremos será aplanar el árbol del JSON,
        ya que de esta forma podemos manejar de manera más sencilla el arreglo de objetos y podremos realizar la lógica necesaria según el 
        método solicitado.
    */

    // Retornamos todos los nodos cuyos hijos seán objetos vacíos
    showChidlessNodes = () => {
        return this.flattendata.filter((element) => element.hijos.length == 0);
    }
    
    // Filtramos y devolvemos todos los nodos cuya cantidad de hijos sea el número que fue pasado al método.
    getNodesByAmountOfChildrens = (quantity) => {
        return this.flattendata.filter(element => element.hijos.length == quantity);
    }
    // Contamos todos los nodos que forman parte del arbol aplanado.
    countTotalNodes = () => {
        return this.flattendata.length;
    }
    
    /*  
        Para este método, lo que haremos es separar cada nodo del nodo raíz, luego filtraremos por curso según el curso enviado en el payload.
        Luego de esto, obtendremos todas las secciones que forman parte del curso y las filtraremos según la sección señalada en el payload.
        Luego de tener la sección filtrada, verificaremos a través de una función booleana si se ofrece el curso o no, en caso de que sí,
        Agregamos la Sede al arreglo ya que cumple con todos los requisitos.

        // El mismo procedimiento podría ser hecho por un método padre que realizara toda la lógica mencionada por detrás en la clase Utils.. 
        El mismo procedimiento podría ser hecho por un método padre que realizara toda la lógica mencionada por detrás en la clase Utils.. 
        se deja así con el fin de dejar más a la vista el procedimiento y la lógica detrás del método filterNodeByOffer.
    */
    filterNodeByOffer = (payload) => {
        const stack = [...this.data.hijos];
        let NodesThatOfferCourse = [];
        while (stack.length){
            const actualNode = stack.pop();
            let grades = getGradesFromNodo(Object.values(actualNode));
            let gradeFiltered = FilterGradeByName(grades, payload.gradeName);
            let sectionsFromGrade = GetSectionsFromGrade(gradeFiltered);
            let offersFromSection = getOffersFromSection(sectionsFromGrade, payload.sectionName);
            if (isCourseOffered(offersFromSection,payload.offeredCourse)) NodesThatOfferCourse.push(actualNode.nombre);
        }
        return NodesThatOfferCourse;
    }
}