(()=>{
    enum TemperatureLevel {// Camel Case
                            //when converted to js, the script nullchecks the variable TemperatureLevel.
                            // if it is null, it returns an empty object {}
     
                            low,
                            medium,
                            high
                            
    }

    let currentTemperature = TemperatureLevel.high

    console.log(currentTemperature); //output : 2

    enum numbers{ //you can set an initial value
        two=2,
        three,
        four,
    }

    console.log(numbers.three); //output : 3

    enum weirdEnum{
        two=2,
        three,
        four,
        five,
        what,
        six=6,
        seven,
        eight,
        one=1,
        something
    }
    console.log("weird enum:");
    
    console.log(weirdEnum.two);//output : 2
    console.log(weirdEnum.five);//output : 5
    console.log(weirdEnum.what);//output : 6
    console.log(weirdEnum.six);//output : 6
    console.log(weirdEnum.seven);//output : 7
    console.log(weirdEnum.something);//output : 2

    
    
})();