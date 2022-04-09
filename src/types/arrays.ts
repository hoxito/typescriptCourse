(()=>{
    const numbers : number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    const array = ["a", "b", "c"];

    numbers.push(1); //numbers.push("1") is'nt allowed
    numbers.push(NaN)

    console.log("numbers"+numbers);
    
    array.forEach(c => console.log(c.toUpperCase()));

})();