"use strict";
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var array = ["a", "b", "c"];
    numbers.push(1); //numbers.push("1") is'nt allowed
    numbers.push(NaN);
    console.log("numbers" + numbers);
    array.forEach(function (c) { return console.log(c.toUpperCase()); });
})();
//# sourceMappingURL=arrays.js.map