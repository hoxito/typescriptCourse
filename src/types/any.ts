(()=>{
// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
// When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, 
// assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal.
    let a : any =123;
    let b;
    let c;

    a = "a string";

    //casting can be done by using the syntax "(var as type)" or "<type>var"
    console.log((a as string).charAt(2));
    
    a=12.2121;
    console.log(a.toFixed(2));

    console.log(b);
    
    
    


})();