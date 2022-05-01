(() =>{
//Try defining each object attribute type correctly. Solution is found in file "testSolution.ts"
// Objects
const car1 = {
  color: "Black",
  Wheels: 4,
  Doors:4
};

const truck = {
  color: "yellow",
  antibalas: 6,
  Doors:2,
  honk(){ //  method honk is optional
    console.log("honk");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
const villains = [{
  name:"Lex Luthor",
  age: 54,
  mutant:false
},{
  name: "Erik Magnus Lehnsherr",
  age: 49,
  mutant: true
},{
  name: "James Logan",
  age: undefined,
  mutant: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;

mystique = charles;
mystique = apocalipsis;

})();