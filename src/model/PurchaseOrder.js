import moment from "moment";

export class PurchaseOrder {
    constructor(po_num, part, qty, ppp){
        this.po_number = po_num;
        this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
        this.part = part;
        this.quantity = qty;
        this.price_per_part = ppp;
        this.total = Number(qty) * Number(ppp);
    }
}