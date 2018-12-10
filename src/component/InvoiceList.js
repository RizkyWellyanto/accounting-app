import React, { Component } from 'react';

class InvoiceList extends Component {
    constructor(props) {
        super(props);
    }

    renderInvoices() {
        if (this.props.invoice_list) {
            return (
                this.props.invoice_list.map((invoice, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{invoice.invoice_number}</td>
                            <td>{invoice.date|| ""}</td>
                            <td>{invoice.customer.last_name|| ""}</td>
                            <td>{invoice.quantity || ""}</td>
                            <td>{invoice.price_per_part || ""}</td>
                            <td>{invoice.total || ""}</td>
                        </tr>
                    )
                })
            )
        }
    }

    render() {
        return (
            <div>
                <table className={"table table-bordered table-striped"}>
                    <tbody>
                    <tr>
                        <th>Invoice Number</th>
                        <th>Date Paid</th>
                        <th>Customer</th>
                        <th>Quantity</th>
                        <th>Price/Part</th>
                        <th>Total</th>
                    </tr>

                    {this.renderInvoices()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default InvoiceList;