import Vorm from "./Vorm.js"

export default class Rechthoek extends Vorm {
    constructor(label, breedte, hoogte) {
        super(label, breedte, hoogte)
    }

    getOppervlakte() {
        return this.breedte * this.hoogte
    }
}