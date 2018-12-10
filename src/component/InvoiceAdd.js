import React, {Component} from 'react';
import {Invoice} from "../model/Invoice";


class InvoiceAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current_customer: "",
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
            current_customer: this.props.customer_list[event.target.value]
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
        if (this.state.current_customer && this.props.invoice_list) {

            const newInvoice = new Invoice(this.props.invoice_list.length, this.state.current_customer, this.state.quantity, this.state.price_per_part);

            // TODO do accounting math here

            const newList = [...this.props.invoice_list, newInvoice];

            this.props.onSubmit(newList);
        }
    }

    render() {
        return (
            <form className="form-inline">
                <select value={this.state.current_customer} onChange={this.handleChange} className="form-control">
                    <option value={null}>Select Customer</option>
                    {this.renderCustomerOptions()}
                </select>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Quantity"
                           onChange={this.handleQuantity}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Price Per Part"
                           onChange={this.handlePricePerPart}/>
                </div>

                <button type="button" className="btn btn-default btn-primary" onClick={this.handleNewInvoice}>Create
                    Invoice
                </button>
            </form>
        );
    }
}

export default InvoiceAdd;