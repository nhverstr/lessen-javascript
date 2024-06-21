// Nathan test je

let var1 = ""
let var2 = 2

// conventie om "else" daar te zetten bij closing haakje van "if"
if (var2 > 5) {

} else {
    console.log(var1)
}

// object, zet komma's zoals bij delen van een zin, gekrulde haakjes
let nathan = {
    leeftijd: 26,
    dickLength: "small",
    character: "quite sweet",
}

//lijst 
let frigoLijst = ["melk", "boter", "pannenkoeken", "dick"]

//for-loop, for each is de naam maar je schrijft for
for (item in frigoLijst) {
    console.log(item)
}

// tweede manier for each met array function, als je de functie meegeeft dan zet je geen haakjes want hij moet op dat moment nog niet uitgevoerd worden, haakjes zijn voor als je wat de functie returned wil meegeven
function returnItem(item) {
    console.log(item)
}

frigoLijst.forEach(returnItem)

// derde manier = chaining met arrow function (of anonymous function), dit is nice want je kan meerdere functies in 1 lijn uitvoeren (.splice().forEach() bv)
frigoLijst.forEach((item) => { console.log(item) })

// return stopt een functie, is het laatste van je functie

function plus(num) {
    return num + 1
}

let x = plus(1)
console.log(x)


let calculator = {
    plus: (num) => { return num + 1 },
    min: (num) => { return num - 1 },
}

// allebei goed om value te krijgen van een object maar tweede enkel als er geen special characters inzitten, direct functies uit een object gebruiken
calculator["plus"]()
calculator.plus(5)
calculator.min(5)

// je kan ook gewoon de functie oproepen zonder hem uit te voeren
calculator.plus
calculator.min





