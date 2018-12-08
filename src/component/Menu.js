import React, { Component } from 'react';

class Menu extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className={"navbar navbar-default"}>
                <button className={"btn btn-default btn-lg"} onClick={() => {this.props.onClick("employee")}}>Employees</button>
                <button className={"btn btn-default btn-lg"} onClick={() => {this.props.onClick("vendor")}}>Vendors</button>
                <button className={"btn btn-default btn-lg"} onClick= {() => {this.props.onClick("customer")}}>Customers</button>
                <button className={"btn btn-default btn-lg"} onClick= {() => {this.props.onClick("payment")}}>Payroll</button>
                <button className={"btn btn-default btn-lg"} onClick= {() => {this.props.onClick("inventory")}}>Inventory</button>
                <button className={"btn btn-default btn-lg"} onClick= {() => {this.props.onClick("invoice")}}>Invoice</button>
                <button className={"btn btn-default btn-lg"} onClick= {() => {this.props.onClick("purchase_order")}}>Purchase Order</button>
                <button className={"btn btn-default btn-lg"} onClick= {() => {this.props.onClick("balance_sheet")}}>Balance Sheet</button>
                <button className={"btn btn-default btn-lg"} onClick= {() => {this.props.onClick("income_statement")}}>Income Statement</button>
            </div>
        );
    }
}

export default Menu;