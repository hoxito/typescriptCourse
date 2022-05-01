(() =>{
  
//Defining custom object types
type Person = {
    age: number,
    name: string,
    email:string,
    getName:Function
    celphone?:string, //optional attributes
    id?: string,
}

let john={
    age:18,
    name:"john connor",
    email:"johnconnor@terminator.com",
    getName:()=>{
        return john.name
    }

}

})();