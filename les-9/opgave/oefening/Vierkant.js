import Vorm from "./Vorm.js"

export default class Vierkant extends Vorm { //neem alles mee van vorm, alle methoden
    constructor(breedte) { //je moet hoogte zelf niet meegeven want formule opp vierkant (breedte hier heeft eigenlijk niets te maken met breedte in vorm, zou ander woord kunnen zijn)
        super("vierkant", breedte); //super() is een functie die je hier called, de argumenten worden doorgegeven aan constructor in Vorm, de volgorde is dus belangrijk
    }

    getLabel() {
        return this.label //hij kijkt eerst bestaat een custom label in vierkant? nee => heeft de paret er 1? ja! => neem die (inheritance)
    }//eigenlijk zetten we dit best gewoon in vorm, want werkt voor ze allemaal omdat we label gebruiken

    getOppervlakte() {
        return this.breedte ** 2 //this. want breedte en hoogte van deze classe, bestaan erbuiten niet of toch niet met deze waarden
    }
    
}

