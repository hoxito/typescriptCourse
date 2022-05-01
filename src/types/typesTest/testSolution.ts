
(()=>{
// Basic Functions
function sum( a:number, b:number ){
  return a + b;
}

const count = ( heroes:string[] ) => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Green lantern"];
count(superHeroes);

//Optional parameters
const fightEnemy = ( isFlashPresent?:Boolean  ) => {
  if(  isFlashPresent ){
    console.log("We defeated him quickly");
  }else{
    console.log("We barely beat him");
  }
}
fightEnemy();

//Default parameters
const callBatman = ( request:string="help us" ) => {
 
    console.log("Batman, please "+request);
  
}
callBatman("save me")
// Rest parameters
const joinHeroes = ( ...people:string[]  ) => {
  return people.join(", ");
}


// Function type
const doesNothing = ( anumber:number, atext:string, aboolean:boolean, anarray:Array<any> )=> {}

// Create the function type that accepts the function "doesNothing"
let nothingEither=(n:number,t:string,b:boolean,a:Array<any>)=> {};
nothingEither = doesNothing;
})();