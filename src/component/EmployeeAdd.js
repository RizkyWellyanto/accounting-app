import React, {Component} from 'react';
import {Employee} from "../model/Employee";

class EmployeeAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipcode: "",
            ssn: "",
            witholdings: "",
            salary: "",
        };

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleAddress1 = this.handleAddress1.bind(this);
        this.handleAddress2 = this.handleAddress2.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleZipcode = this.handleZipcode.bind(this);
        this.handleSSN = this.handleSSN.bind(this);
        this.handleWitholdings = this.handleWitholdings.bind(this);
        this.handleSalary = this.handleSalary.bind(this);

        this.handleNewEmployee = this.handleNewEmployee.bind(this);
    }

    handleFirstName(e) {
        this.setState({
            first_name: e.target.value
        })
    }

    handleLastName(e) {
        this.setState({
            last_name: e.target.value
        })
    }

    handleAddress1(e) {
        this.setState({
            address1: e.target.value
        })
    }

    handleAddress2(e) {
        this.setState({
            address2: e.target.value
        })
    }

    handleCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    handleState(e) {
        this.setState({
            state: e.target.value
        })
    }

    handleZipcode(e) {
        this.setState({
            zipcode: e.target.value
        })
    }

    handleSSN(e) {
        this.setState({
            ssn: e.target.value
        })
    }

    handleWitholdings(e) {
        this.setState({
            witholdings: e.target.value
        })
    }

    handleSalary(e) {
        this.setState({
            salary: e.target.value
        })
    }

    handleNewEmployee() {
        const {first_name, last_name, address1, address2, city, state, zipcode, ssn, witholdings, salary} = this.state;

        const newEmployee = new Employee(first_name, last_name, address1, address2, city, state, zipcode, ssn, witholdings, salary);

        const newList = [...this.props.employee_list, newEmployee];

        this.props.onSubmit(newList);
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name"
                           onChange={this.handleFirstName}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name"
                           onChange={this.handleLastName}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Address 1"
                           onChange={this.handleAddress1}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Address 2"
                           onChange={this.handleAddress2}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="City"
                           onChange={this.handleCity}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="State"
                           onChange={this.handleState}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Zipcode"
                           onChange={this.handleZipcode}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="SSN"
                           onChange={this.handleSSN}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Witholdings"
                           onChange={this.handleWitholdings}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Salary"
                           onChange={this.handleSalary}/>
                </div>

                <button type="button" className="btn btn-default btn-primary" onClick={this.handleNewEmployee}>Add
                    Employee
                </button>
            </form>
        );
    }
}

export default EmployeeAdd;