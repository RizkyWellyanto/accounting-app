import React, {Component} from 'react';
import {Employee} from "../model/Employee";
import {Payment} from "../model/Payment";

class PaymentAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current_employee:""
        };

        this.handleNewPayment = this.handleNewPayment.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    renderEmployeeOptions(){
        if(this.props.employee_list){
            return(
                this.props.employee_list.map((employee, idx) => {
                    return <option key={idx} value={idx}>{employee.last_name}</option>
                })
            )
        }
    }

    handleChange(event){
        this.setState({
            current_employee: this.props.employee_list[event.target.value]
        })
    }


    handleNewPayment() {
        if (this.state.current_employee && this.props.payment_list){

            const newPayment = new Payment(this.state.current_employee);

            // TODO do accounting math here

            const newList = [...this.props.payment_list, newPayment];

            this.props.onSubmit(newList);
        }
    }

    render() {
        return (
            <form className="form-inline">
                <select value={this.state.current_employee} onChange={this.handleChange} className="form-control">
                    <option value={null} disabled>Select Employee</option>
                    {this.renderEmployeeOptions()}
                </select>

                <button type="button" className="btn btn-default btn-primary" onClick={this.handleNewPayment}>Pay
                    Employee
                </button>
            </form>
        );
    }
}

export default PaymentAdd;