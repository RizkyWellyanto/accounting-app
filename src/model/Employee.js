export class Employee {
    constructor(f_name, l_name, addr1, addr2, city, state, zip, ssn, whold, salary){
        this.first_name = f_name;
        this.last_name = l_name;
        this.address1 = addr1;
        this.address2 = addr2;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.ssn = ssn;
        this.witholdings = whold;
        this.salary = salary;
    }
}