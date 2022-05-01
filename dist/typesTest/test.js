"use strict";
// In this basic types test you must complete the following code to so that it behaves as expected
(function () {
    // Basic Functions
    function sum(a, b) {
        return a + b;
    }
    var count = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Green lantern"];
    count(superHeroes);
    //Optional parameters
    var fightEnemy = function (isFlashPresent) {
        if (isFlashPresent) {
            console.log("We defeated it quickly");
        }
        else {
            console.log("We barely beat it");
        }
    };
    //Default parameters
    var callBatman = function (request) {
        console.log("Batman, please " + request);
    };
    callBatman();
    // Rest parameters
    var joinHeroes = function (people) {
        return people.join(", ");
    };
    // Tipo funcion
    var doesNothing = function (anumber, atext, aboolean, anarray) { };
    // Create the function type that accepts the function "doesNothing"
    var nothingEither;
    nothingEither = doesNothing;
})();
//# sourceMappingURL=test.js.map