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
let natureString = natureArr.toString();
let techString = techArr.toString();
console.log(natureString);
console.log(techString);
/**
 * Deel 2: filter() vs reduce()
 * Neem alle woorden van natureArr, en maak een nieuw lijst 'shortNatureArr'
 * In shortNature komen alle woorden met minder dan 6 letters
 * Print shortNature, met de methode die je leerde in deel 1
 */


// code deel 2
let shortNatureArr = natureArr.filter(checkWordLength);

function checkWordLength(word) {
  if (word.length < 6) {
    return word;
  }
}
/*@Nathan: wat ik niet snap is hoe js nu weet wat ik bedoel met word? */
console.log("shortNatureArr has all words of natureArr that have less then six characters", shortNatureArr);


/* Deel 3
 * Output het laatste woord met 4 letters in techArr
 */

/*methode 1 */
let techArrFour = techArr.filter(checkWordLength2);

function checkWordLength2(word) {
  if (word.length === 4) {
    return word;
  }
};

let lastWord = techArrFour.slice(-1).toString();
console.log("lastWord has the last four character word of techArr:", lastWord);

/*methode 2 */
let lastWord2 = techArr.findLast(checkWordLength2);
console.log("lastWord2 has the last four character word of techArr:", lastWord2);

/*
 * Output techArr zonder dat laatste woord
 */
let techArrSpliced = techArr;
techArrSpliced.splice(techArr.indexOf(lastWord2), 1);
console.log("techArrSpliced is techArr without lastWord", techArrSpliced);
/* Output de reverse van deze array.*/
let techArrReverse = techArr.reverse();
console.log("techArrReverse is the reverse array of techArr", techArrReverse);
/*
 *
 * Output het eerste woord met 4 letters in techArr
 */
let firstWord = techArrFour[0].toString();
let firstWord2 = techArrFour.slice(0,1).toString();
let firstWord3 = techArrFour.find(checkWordLength2) /*find(), finds the first instance */;
console.log("The result of several way to get the first four letter word of techArr:", firstWord, firstWord2, firstWord3);
 /* 
 * Output techArr zonder dat eerste woord
 */

let techArrSpliced2 = techArr;
techArrSpliced2.splice(techArr.indexOf(firstWord), 1);
console.log(techArrSpliced2);
/*
 *
 * Tip: als je deze allemaal na elkaar uitvoert, kom je in de problemen. Gebruik een temporary array
 * om je originele bewaren
 */

/**
 * Deel 4
 * Wat is het verschil tussen .includes() en .indexOf()?
 *
 * Test dit, door te zoeken naar het woord 'flower' in natureArr.
 * Output het resultaat van .includes() op 'flower'
 * Output het resultaat van .indexOf() op 'flower'
 */

// code deel 4

let flowerIncluded = natureArr.includes("flower")
console.log(flowerIncluded)

let flowerIndex = natureArr.indexOf("flower")
console.log(flowerIndex)

/* Het verschil is dat includes() je enkel een idee geeft over of het element dat in de array zit (returned boolean), terwijl indexOf() ook de positie geeft. Je kan indexOf() ook gebruiken om te zien of het element erin zit, want als het er niet in zit word er een "-1" gereturned */
