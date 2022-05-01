"use strict";
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
            console.log("We defeated him quickly");
        }
        else {
            console.log("We barely beat him");
        }
    };
    fightEnemy();
    //Default parameters
    var callBatman = function (request) {
        if (request === void 0) { request = "help us"; }
        console.log("Batman, please " + request);
    };
    callBatman("save me");
    // Rest parameters
    var joinHeroes = function () {
        var people = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            people[_i] = arguments[_i];
        }
        return people.join(", ");
    };
    // Function type
    var doesNothing = function (anumber, atext, aboolean, anarray) { };
    // Create the function type that accepts the function "doesNothing"
    var nothingEither = function (n, t, b, a) { };
    nothingEither = doesNothing;
})();
//# sourceMappingURL=testSolution.js.map