import moment from "moment";

const TAX_RATE = 0.355;

export class Payment {
    constructor(employee){
        this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
        this.employee = employee;
        this.witholding = TAX_RATE * employee.salary;
        this.disbursement = (1 - TAX_RATE) * employee.salary;
    }
}