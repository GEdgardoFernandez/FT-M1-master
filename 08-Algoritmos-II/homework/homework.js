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


  //okey probemos ahora
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
