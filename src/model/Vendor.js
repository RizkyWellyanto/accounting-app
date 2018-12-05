export class Vendor {
    constructor(comp_name, part, ppu, addr1, addr2, city, state, zip){
        this.company_name = comp_name;
        this.part = part;
        this.price_per_unit = ppu;
        this.address1 = addr1;
        this.address2 = addr2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}