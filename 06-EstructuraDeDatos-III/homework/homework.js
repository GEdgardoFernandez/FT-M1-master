'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}
BinarySearchTree.prototype.size = function () {
   let contador = 1;
   if (this.left) {
      contador += this.left.size();
   }
   if (this.right) {
      contador += this.right.size();
   }
   return contador;
};
BinarySearchTree.prototype.insert = function (value) {
   var nuevoNodo = new BinarySearchTree(value);
   if (value < this.value) {
      if (this.left) {
         this.left.insert(value);
      } else {
         this.left = nuevoNodo;
      }
   } else {
      if (this.right) {
         this.right.insert(value);
      } else {
         this.right = nuevoNodo;
      }
   }
};
BinarySearchTree.prototype.contains = function (value) {
   if (value === this.value) {
      return true;
   } else if (value < this.value && this.left) {
      return this.left.contains(value);
   } else if (value > this.value && this.right) {
      return this.right.contains(value);
   }

   return false;
};
//! depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
//! según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
//! Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   
   if (typeof cb !== "function") {
      throw new Error("El callback debe ser una funcion");
   }

   switch (order) {
      case "in-order":
         if (this.left !== null) {
            this.left.depthFirstForEach(cb, order)
         };
         cb(this.value);
         if (this.right !== null) {
            this.right.depthFirstForEach(cb, order)
         };
         break;
      case "pre-order":
         cb(this.value);
         if (this.left !== null) {
            this.left.depthFirstForEach(cb, order);
         };
         if (this.right !== null) {
            this.right.depthFirstForEach(cb, order);
         };
         break;
      case "post-order":
         if (this.left !== null) {
            this.left.depthFirstForEach(cb, order)
         }
         if (this.right !== null) {
            this.right.depthFirstForEach(cb, order)
         }
         cb(this.value)
         break;

      default:

         if (this.left !== null) {
            this.left.depthFirstForEach(cb, order);
         };
         cb(this.value);
         if (this.right !== null) {
            this.right.depthFirstForEach(cb, order);
         };
         break;
   }

};
BinarySearchTree.prototype.breadthFirstForEach = function () {

};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
