// Función que recorre el json y devuelve un objeto con el arbol aplanado.
flattenJsonTree = (element, result) => {
  if (element instanceof Array)
    element.forEach(item => { flattenJsonTree(item, result); });
  else if (element instanceof Object) {
    result.push({ nombre: element.nombre, tipo: element.tipo, hijos: element.hijos });
    if (element.hasOwnProperty("hijos")) {
      flattenJsonTree(element.hijos, result);
    }
  }
}
// Función que formatea todos los cursos de los nodos hijos tipo Curso dento del nodo tipo Sede pasado como parámetro
getGradesFromNodo = (Nodo = []) => {
  return Nodo.filter((key) => Array.isArray(key)).flat();
}
// Función booleana que determina si existe el curso ofrecido dentro de los nodos hijos tipo Oferta del nodo tipo Seccion
isCourseOffered = (Nodo, offeredCourse) => {
  const stack = [...Nodo].flat();
  while (stack.length) {
    const node = stack.pop()
    if (node.nombre == offeredCourse) return true
  }
  return false
}
// Función que filtra según el nombre del curso en los nodos hijos tipo Curso del nodo tipo Sede
FilterGradeByName = (Nodo, gradeName) => {
    return Nodo.filter(actualGrade => actualGrade.nombre == gradeName);
}
// Función que formatea todas las secciones contenidas en los nodos hijos tipo Seccion del nodo tipo Curso
GetSectionsFromGrade = (Nodo) => {
    return Nodo.map(grade => grade.hijos).flat();
}
// Función que filtra según el nombre de la sección en los nodos hijos tipo Seccion del nodo tipo Curso
getOffersFromSection = (Nodo, sectionName) => {
    return Nodo.filter(actualSection => actualSection.nombre == sectionName).map(section => section.hijos).flat();
}

module.exports = {
  flattenJsonTree: flattenJsonTree,
  getGradesFromNodo: getGradesFromNodo,
  isCourseOffered: isCourseOffered,
  FilterGradeByName: FilterGradeByName,
  GetSectionsFromGrade: GetSectionsFromGrade,
  getOffersFromSection: getOffersFromSection
}
