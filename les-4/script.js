/**
 * Beste mol, in les 4 werk je niet in de frontend, maar in de backend.
 *
 * dwz: Je javascript runt niet in een index.html, en je klikt niet op 'go live' om die index.html
 * te hosten in je browser.
 *
 * Nee, je javascript runt nu in je terminal (op de server als het ware) en je gebruikt
 * #> node script.js
 * om het uit te voeren.
 *
 * Output gebeurt steeds met console.log
 *
 */

// JS Array refence
/**
 * Deze les steunt op een heel belangrijke pagina, de javascript array reference (of arr ref in het kort). Dit is een lijst
 * die elke functie de er bestaat, geordend op lijst. Je moet die niet uit je hoofd kennen, maar deze wel
 * extensief gebruiken. (https://www.w3schools.com/jsref/jsref_obj_array.asp) (en dus uit je hoofd kennen)
 * (deze pagina is mijn lievelingspagina)
 */

const natureArr = ["tree", "river", "mountain", "flower"];
const techArr = [
  "computer",
  "internet",
  "software",
  "algorithm",
  "data",
  "network",
  "code",
  "device",
];

console.log("Nature Words:", natureArr);
console.log("Tech Words:", techArr);

/**
 * Deel 1: vind een functie in de array ref die de array verandert naar een string
 * Print die string
 */

// code deel 1
let natureString = natureArr.toString()
let techString = techArr.toString()
console.log(natureString)
console.log(techString)
/**
 * Deel 2: filter() vs reduce()
 * Neem alle woorden van natureArr, en maak een nieuw lijst 'shortNatureArr'
 * In shortNature komen alle woorden met minder dan 6 letters
 * Print shortNature, met de methode die je leerde in deel 1
 */

// code deel 2

/**
 * Deel 3
 * Output het laatste woord met 4 letters in techArr
 * Output techArr zonder dat laatste woord
 *
 * Output de reverse van deze array.
 *
 * Output het eerste woord met 4 letters in techArr
 * Output techArr zonder dat eerste woord
 *
 * Tip: als je deze allemaal na elkaar uitvoert, kom je in de problemen. Gebruik een temporary array
 * om je originele bewaren
 */

// code deel 3

/**
 * Deel 4
 * Wat is het verschil tussen .includes() en .indexOf()?
 * Test dit, door te zoeken naar het woord 'flower' in natureArr.
 * Output het resultaat van .includes() op 'flower'
 * Output het resultaat van .indexOf() op 'flower'
 */

// code deel 4