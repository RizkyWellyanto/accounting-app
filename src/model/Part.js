export class Part {
    constructor(part, ppu, qty, reord){
        this.part = part;
        this.price_per_unit = ppu;
        this.quantity = qty;
        this.value = Number(ppu) * Number(qty);
        this.reorder = reord;
    }
}