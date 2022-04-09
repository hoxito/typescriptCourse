"use strict";
(function () {
    //single-quoted string allow "" (double quotes) inside of strings
    var _a;
    var first = '"first"';
    //With double quotes, you can insert the ' character into the string
    var second = "'second'";
    // Backtick characters are used to indicate Template literals. 
    // Template literals allow embedded expressions called substitutions.
    // They also allow multiline strings and string interpolation with placeholders
    // indicated by the dollar sign and curly braces (${expression}). 
    // The expressions in the placeholders and the text between the backticks (` `) get passed to a function.
    var third = "\"'thi" + first[3] + ((_a = second[6]) === null || _a === void 0 ? void 0 : _a.toLowerCase) + "'\"";
    // the character "?" is used in this expression to check if it is null or not. if it is not null then it applies the "tolowercase" function to the character.
    console.log(first, second, third); //output: "first" 'second' "'third'"                      
    //string methods: https://www.tutorialspoint.com/typescript/typescript_strings.htm
})();
//# sourceMappingURL=Strings.js.map