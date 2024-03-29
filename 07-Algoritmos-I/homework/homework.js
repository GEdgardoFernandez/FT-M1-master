'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if (typeof num !== 'number') {
    return 'Debes ingresar un nnumero';
    
  }
  //!Pasos
  //* 1) crear un arreglo que contenga 1 que es el valor mas pequeño.
  //* 2) usar Bucle FOR para dividir y buscar los primos.
  //* 3) usar WHILE para verificar si el resto de num  por i da 0.
  let array1 = [1];
  for (let i = 2; i <= num; i++){
   while (num % i === 0) {
    array1.push(i);
    num = num / i;
   } 
  }
  return array1
}
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (typeof array.length === 0) {
    return 'Debes ingresar un arreglo con numeros';
  }
  //! Pasos
  //* 1) crear una variable bandera.
  //* 2) usar do - while y for para recorrer el arreglo.
  //* 3) comparar si el la posicion en i+1 es mayor a la posicion i.
  //* 4) en caso positivo mover el que sea menor, en caso contrario seguir comparando.
  //* 5) devolver el arreglo.
  let bandera;
  do {
    bandera = false;
    for (let i = 0; i < array.length -1; i++) {
      if (array[i + 1] < array[i]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        bandera = true; 
      }
    }
  } while (bandera);

  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  if (typeof array.length === 0) {
    return 'Debes ingresar un arreglo con numeros';
  }

  //! pasos
  //* 1) crear una variables para guardar posicion.
  //* 2) crear un for para recorrer el array.
  //* 3) validar si la posicion i es menor a la posicion i + 1.
  //* 4) en caso positivo, intercambiar hasta su posicion final
  //* 5) devolver el array.
  let posicion

  for (let i = 1; i < array.length; i++) {
    posicion = i
    while (posicion > 0 && array[posicion] < array[posicion - 1]) {
      [array[posicion], array[posicion - 1]] = [array[posicion - 1], array[posicion]]
      posicion--
    }

  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  if (typeof array.length === 0) {
    return 'Debes ingresar un arreglo con numeros';
  }
  //!pasos
  //* 1) crear un for para recorrer el array.
  //* 2) crear variable para almacenar el menor.
  //* 3) comparar la posicion i con la posicion i + 1 para validar si es menor que la variable.
  //* 4) en caso positivo, intercambiar hasta su posicion final.
  //* 5) devolver el array.
  let menor;
  for (let i = 0; i < array.length; i++) {
    menor = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[menor] > array[j]) {
        menor = j;
      }
    }
    [array[i], array[menor]] = [array[menor], array[i]]
}
return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
