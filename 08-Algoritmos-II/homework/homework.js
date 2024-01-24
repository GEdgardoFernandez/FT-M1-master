'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //! Pasos
  //* 1) crear variables para almacenar los arreglos left y right, y pivote
  //* 2) crear un for para recorrer el array.
  //* 3) comparar el pivote con el valor de la posicion i
  //* 4) en caso que pivote sea menor que i, agregar i a left. En caso contrario, agregar a right.
  //* 5) devolver el array ordenado
  if (array.length <= 1) {
    return array
    
  }
  
  let pivote = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    if (array [i]> pivote) {
      right.push(array[i])
    } else {
      left.push(array[i])
  }
}
  left = quickSort(left);
  right = quickSort(right);
  return left.concat(pivote, right)
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (typeof array.length <= 0) {
    return 'Debes ingresar un arreglo con numeros';
  }
  //! pasos
  //* 1) verificar si array tiene un solo elemento, en caso positivo devolver el array.
  //* 2) crear variables para almacenar el primer, medio y segundo elemento.
  //* 3) crear un for para recorrer el array e ir diviendolo hasta que quede 1 solo valor dentro del mismo.
  //* 4) comparar el primer elemento con el segundo elemento y pushear al array pero en forma odenada de menor a mayor.
  //* 5) devolver el array.
  if (array.length <= 1) {
    return array
    
  }
  let medio = Math.floor(array.length / 2);
  let primerElemento = array.slice(0, medio);
  let segundoElemento = array.slice(medio);
  function merge(primerElemento, segundoElemento){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < primerElemento.length && j < segundoElemento.length){
      if(primerElemento[i] < segundoElemento[j]){
        result.push(primerElemento[i])
        i++
      } else {
        result.push(segundoElemento[j])
        j++
      }
    }
    return result.concat(primerElemento.slice(i), segundoElemento.slice(j))
  }
  let left = mergeSort(primerElemento);
  let right = mergeSort(segundoElemento);

  return merge(left, right);
  //okey probemos ahora
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
