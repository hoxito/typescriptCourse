
(() =>{
    //creating a variable with an object
let john={age:30,name:"john"}
    function greet(person: { name: string; age: number }) {
        return "Hello " + person.name;
      }
console.log(greet(john))


//methods inside an object 

let michael = {
age:30,
name:"michael",
getName(){
    return this.name
},
shout(){return "AAAH"}
}
console.log(michael.shout)


})();