// (tegen donderdag) zelfstudie: if-statements: als het vroeger is dan 10 uur (integer) schrijf goedemorgen, indien het na 10 uur is schrijf goedeavond, indien het exact 10 uur is schrijf hey

const prompt = require('prompt-sync')({sigint: true});

let tijd = prompt("Enter a time")

let woordje = String

// manier 1

console 
if (tijd < 10) {
    console.log("Goedemorgen!");
}
else if (tijd > 10) {
    console.log("Goedeavond");
}
else console.log("Hey")

// manier 2
console 
if (tijd < 10) {
    woordje = "Goedemorgen";
}
else if (tijd > 10) {
    woordje = "Goedeavond";
}
else woordje = "Hey"

console.log("Op dit uur zeggen we", woordje)
