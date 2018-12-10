export class Part {
    constructor(part, ppu, qty, val, reord){
        this.part = part;
        this.price_per_unit = ppu;
        this.quantity = qty;
        this.value = val;
        this.reorder = reord;
    }
}