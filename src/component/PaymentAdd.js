import React, {Component} from 'react';
import {Payment} from "../model/Payment";
import clone from "clone";
// import deepcopy from 'deepcopy';

class PaymentAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curr_idx:-1
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
            curr_idx: event.target.value
        })
    }


    handleNewPayment() {
        if (this.state.curr_idx >= 0 && this.props.payment_list){
            const currentEmployee = this.props.employee_list[this.state.curr_idx];
            const newPayment = new Payment(currentEmployee);
            const {salary} = currentEmployee;

            var newBalanceSheet = clone(this.props.balance_sheet);
            var newIncomeStatement = clone(this.props.income_statement);

            // make new payment
            const newList = [...this.props.payment_list, newPayment];

            // reduce cash by salary amount in balance_sheet
            newBalanceSheet.assets.cash -= salary;

            // increase expenses by salary amount in income_statement
            newIncomeStatement.expenses.payroll += newPayment.disbursement;
            newIncomeStatement.expenses.payroll_witholding += newPayment.witholding;

            this.props.onSubmit(newList, newBalanceSheet, newIncomeStatement);
        }
    }

    render() {
        return (
            <form className="form-inline">
                <select value={this.state.curr_idx} onChange={this.handleChange} className="form-control">
                    <option value={-1} disabled>Select Employee</option>
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