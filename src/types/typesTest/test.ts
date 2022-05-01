// In this basic types test you must complete the following code to so that it behaves as expected

(()=>{
// Basic Functions
function sum( a, b ){
  return a + b;
}

const count = ( heroes ) => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Green lantern"];
count(superHeroes);

//Optional parameters
const fightEnemy = ( isFlashPresent  ) => {
  if(  isFlashPresent){
    console.log("We defeated it quickly");
  }else{
    console.log("We barely beat it");
  }
}

//Default parameters
const callBatman = ( request ) => {
 
    console.log("Batman, please "+request);
  
}

callBatman();

// Rest parameters
const joinHeroes = ( people ) => {
  return people.join(", ");
}


// Tipo funcion
const doesNothing = ( anumber, atext, aboolean, anarray )=> {}

// Create the function type that accepts the function "doesNothing"
let nothingEither;
nothingEither = doesNothing;
})();