"use strict";
(function () {
    var TemperatureLevel;
    (function (TemperatureLevel) {
        //when converted to js, the script nullchecks the variable TemperatureLevel.
        // if it is null, it returns an empty object {}
        TemperatureLevel[TemperatureLevel["low"] = 0] = "low";
        TemperatureLevel[TemperatureLevel["medium"] = 1] = "medium";
        TemperatureLevel[TemperatureLevel["high"] = 2] = "high";
    })(TemperatureLevel || (TemperatureLevel = {}));
    var currentTemperature = TemperatureLevel.high;
    console.log(currentTemperature); //output : 2
    var numbers;
    (function (numbers) {
        numbers[numbers["two"] = 2] = "two";
        numbers[numbers["three"] = 3] = "three";
        numbers[numbers["four"] = 4] = "four";
    })(numbers || (numbers = {}));
    console.log(numbers.three); //output : 3
    var weirdEnum;
    (function (weirdEnum) {
        weirdEnum[weirdEnum["two"] = 2] = "two";
        weirdEnum[weirdEnum["three"] = 3] = "three";
        weirdEnum[weirdEnum["four"] = 4] = "four";
        weirdEnum[weirdEnum["five"] = 5] = "five";
        weirdEnum[weirdEnum["what"] = 6] = "what";
        weirdEnum[weirdEnum["six"] = 6] = "six";
        weirdEnum[weirdEnum["seven"] = 7] = "seven";
        weirdEnum[weirdEnum["eight"] = 8] = "eight";
        weirdEnum[weirdEnum["one"] = 1] = "one";
        weirdEnum[weirdEnum["something"] = 2] = "something";
    })(weirdEnum || (weirdEnum = {}));
    console.log("weird enum:");
    console.log(weirdEnum.two); //output : 2
    console.log(weirdEnum.five); //output : 5
    console.log(weirdEnum.what); //output : 6
    console.log(weirdEnum.six); //output : 6
    console.log(weirdEnum.seven); //output : 7
    console.log(weirdEnum.something); //output : 2
})();
//# sourceMappingURL=enums.js.map