import moment from "moment";

export class Invoice {
    constructor(iv_num, cust, qty, ppp){
        this.invoice_number = iv_num;
        this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
        this.customer = cust;
        this.quantity = qty;
        this.price_per_part = ppp;
        this.total = Number(qty) * Number(ppp);
    }
}