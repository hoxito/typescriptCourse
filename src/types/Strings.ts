(()=>{
//single-quoted string allow "" (double quotes) inside of strings

const first : string = '"first"'


//With double quotes, you can insert the ' character into the string

const second : string = "'second'" 

// Backtick characters are used to indicate Template literals. 
// Template literals allow embedded expressions called substitutions.
// They also allow multiline strings and string interpolation with placeholders
// indicated by the dollar sign and curly braces (${expression}). 
// The expressions in the placeholders and the text between the backticks (` `) get passed to a function.

const third : string = `"'thi${first[3]}${second[6]?.toLowerCase}'"` 

// the character "?" is used in this expression to check if it is null or not. if it is not null then it applies the "tolowercase" function to the character.

console.log(first, second, third) //output: "first" 'second' "'third'"                      

//string methods: https://www.tutorialspoint.com/typescript/typescript_strings.htm

})();
