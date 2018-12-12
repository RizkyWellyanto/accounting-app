import React, {Component} from 'react';
import {Invoice} from "../model/Invoice";
import clone from  "clone"
import {Part} from "../model/Part";


class InvoiceAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curr_idx: -1,
            quantity: 0,
            price_per_part: 0,
        };

        this.handleNewInvoice = this.handleNewInvoice.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleQuantity= this.handleQuantity.bind(this);
        this.handlePricePerPart= this.handlePricePerPart.bind(this);
    }

    renderCustomerOptions() {
        if (this.props.customer_list) {
            return (
                this.props.customer_list.map((customer, idx) => {
                    return <option key={idx} value={idx}>{customer.last_name}</option>
                })
            )
        }
    }

    handleChange(event) {
        this.setState({
            curr_idx: event.target.value
        })
    }

    handleQuantity(e) {
        this.setState({
            quantity: e.target.value
        })
    }

    handlePricePerPart(e) {
        this.setState({
            price_per_part: e.target.value
        })
    }


    handleNewInvoice() {
        if (this.state.curr_idx >= 0 && this.props.invoice_list) {
            const currCustomer = this.props.customer_list[this.state.curr_idx];
            const newInvoice = new Invoice((this.props.invoice_list.length + 1), currCustomer, this.state.quantity, this.props.product.price);

            var newBalanceSheet = clone(this.props.balance_sheet);
            var newIncomeStatement = clone(this.props.income_statement);

            // add new invoice
            const newList = [...this.props.invoice_list, newInvoice];

            // reduce items in inventory
            var newInventory = [];
            Object.keys(this.props.product.parts).forEach((partInCar) => {
                var partObject = this.props.inventory.find((partObjectInInventory) => {
                    if (partObjectInInventory.part === partInCar){
                        return partObjectInInventory
                    }
                });

                const part = partObject.part;
                const ppu = partObject.price_per_unit;
                const qty = partObject.quantity - (this.state.quantity * this.props.product.parts[partInCar]);
                const reord = partObject.quantity < this.props.product.parts[partInCar] ? "Yes" : "No";

                const newPartObject = new Part(part, ppu, qty, reord);

                newInventory.push(newPartObject);
            });

            // reduce inventory in balance sheet, increase accounts receivable
            newBalanceSheet.assets.accounts_receivable += newInvoice.total;
            newBalanceSheet.assets.inventory -= this.props.product.cogs * this.state.quantity;

            // increase sales and cogs in income statement
            newIncomeStatement.sales.sales += newInvoice.total;
            newIncomeStatement.sales.cogs += this.props.product.cogs * this.state.quantity;

            this.props.onSubmit(newList, newInventory, newBalanceSheet, newIncomeStatement);
        }
    }

    render() {
        return (
            <form className="form-inline">
                <select value={this.state.curr_idx} onChange={this.handleChange} className="form-control">
                    <option value={-1} disabled>Select Customer</option>
                    {this.renderCustomerOptions()}
                </select>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Quantity"
                           onChange={this.handleQuantity}/>
                </div>

                <button type="button" className="btn btn-default btn-primary" onClick={this.handleNewInvoice}>Create
                    Invoice
                </button>
            </form>
        );
    }
}

export default InvoiceAdd;