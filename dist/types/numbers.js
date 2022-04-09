"use strict";
var a;
a = 1;
console.log(a);
//typescript nos obliga a anunciar el tipo de dato con el que estamos trabajando
var b = 10;
//para que en este tipo de operaciones, podamos comparar dos variables en caso de ser de un mismo tipo de dato.
if (a < b) {
    console.log("f");
}
else {
    console.log("g");
}
//Este codigo retorna el valor NaN que en js es un numero.
a = Number("132a");
console.log(a);
//# sourceMappingURL=numbers.js.map