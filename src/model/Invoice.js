export class Invoice {
    constructor(iv_num, date, cust, qty, ppp, total){
        this.invoice_number = iv_num;
        this.date = date;
        this.customer = cust;
        this.quantity = qty;
        this.price_per_part = ppp;
        this.total = total;
    }
}