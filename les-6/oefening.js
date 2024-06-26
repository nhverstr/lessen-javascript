// kleine verduidelijking op oefening, complexe data structuren
let woorden = {
    znNaamwoordGroepen: [
        {
            lidWoord: "de",
            woorden: ["koe", "schuurborstel", "stylo", "kernenergie", "kat", "pyromaan"]
        },
        {
            lidWoord: "het",
            woorden: ["theekopje", "korenbloempje", "brood", "kastje", "gesprek"]
        },
        {
            lidWoord: "een",
            woorden: ["betweter", "waterkan", "krokodil", "tandenborstel"]
        },
        {
            lidWoord: "",
            woorden: ["Nathan", "liefde", "Virginie"]
        }
    ],
    werkWoorden: ["speelt", "eet", "geeft", "likt", "gilt", "krabt", "geeuwt", "klikt", "schuurt", "boert"],
    voegWoorden: ["met", "aan", "naar", "bij", "in", "rondom", "op", "tussen", "zonder"],
    lidWoorden: ['de', 'het', 'een', 'puur']
}


console.log(woorden.znNaamwoordGroepen[2].woorden[0]);