import Vorm from "./Vorm.js"
import Cirkel from "./Cirkel.js"
import Rechthoek from "./Rechthoek.js"
import Vierkant from "./Vierkant.js"

let randomVorm = new Vorm("hallo", 5, 4)
console.log(randomVorm.getLabel())

let vierkant1 = new Vierkant("",5) //we geven geen label mee
console.log(vierkant1.getLabel())
