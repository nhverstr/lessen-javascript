// dit is een file waarin ik javescript code leer schrijven, basics

// variabelen die eerst een interger is, dan string en dan lijst. Variabelen zijn in camelCase nooit in hoofdletter

let virginie = 1
virginie = "1"
virginie = ["mooi", 5, false]

console.log("dit is een variabele: ", typeof virginie, virginie)

// een array is eigenlijk ook een object, waarbij de indexen de keys zijn namelijk:

let fruit = ["appel", "peer"]
fruit = {
    0: "appel",
    1: "peer"
}

console.log("dit is het fruit object: ", fruit)

// dit is een object

let nathan = {
    leeftijd: 26,
    happy: true
}

console.log("dit is het nathan object:", nathan, "het type van de key happy is:", typeof nathan.happy)

// for loops

/*for (statement){
    expression
}
*/

let melk = ["a", "b", "c"]

// for loop returned de key van de object
for (item in melk) {
    console.log(item)
}

// doe hetvolgende om de value te returnen
for (item in melk) {
    console.log(melk[item])
}

