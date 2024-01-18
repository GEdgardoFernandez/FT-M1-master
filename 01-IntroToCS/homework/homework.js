'use strict';

function BinarioADecimal(num) {
   var decimal = parseInt(num, 2);
   return decimal;
}

function DecimalABinario(num) {
   var binario = num.toString(2);
   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
