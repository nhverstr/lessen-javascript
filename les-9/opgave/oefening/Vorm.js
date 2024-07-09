// klassen geven een vaste structuur en regels en je weet wat je kan terugkrijgen en wat niet vs gewoon variablen gebruiken

export default class Vorm {
    label
    breedte
    hoogte  //property aankondigen, moet striktgenomen niet in js maar best practice
    constructor(label, breedte, hoogte) {
        this.label = label;
        this.breedte = breedte;
        this.hoogte = hoogte;
    }

    getLabel() {
        return this.label
    }

    getOppervlakte() {

    } //ookal zet je hier niets in, we moeten weten dat alle vormen een get opp hebben door in de parent class aan te duiden

    setLabel() {
        this.label = label
        console.log('JE hebt het label aangepast zowaar')
    }
}

//je gebruikt getters (getLabel) en setters ipv Vorm.label (gewoon aanvaarden)

//zelfde resultaat, maar we gaan de notificatie niet krijgen en eigenlijk niet weten dat het veranderd is

mijnvorm1.setLabel('nieuw label')
mijnvorm1.label = 'nieuw label'