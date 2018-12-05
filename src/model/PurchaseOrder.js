export class PurchaseOrder {
    constructor(po_num, date, supp, part, qty, ppp, total){
        this.invoice_number = po_num;
        this.date = date;
        this.suplier = supp;
        this.part = part;
        this.quantity = qty;
        this.price_per_part = ppp;
        this.total = total;
    }
}