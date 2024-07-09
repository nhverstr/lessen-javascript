import Vorm from "./Vorm.js"

export default class Cirkel extends Vorm {
    constructor(label, breedte) {
        super('cirkel', breedte)
    }

    getOppervlakte() {
        return ((this.breedte/2)**2)*Math.PI
    }
}