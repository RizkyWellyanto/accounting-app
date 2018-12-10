import React, { Component } from 'react';

class PurchaseOrderList extends Component {
    constructor(props) {
        super(props);
    }

    renderPurchaseOrders() {
        if (this.props.po_list) {
            return (
                this.props.po_list.map((po, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{po.po_number}</td>
                            <td>{po.date|| ""}</td>
                            <td>{po.part.part|| ""}</td>
                            <td>{po.quantity || ""}</td>
                            <td>{po.price_per_part || ""}</td>
                            <td>{po.total || ""}</td>
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
                        <th>PO Number</th>
                        <th>Date</th>
                        <th>Part</th>
                        <th>Quantity</th>
                        <th>Price/Part</th>
                        <th>Total</th>
                    </tr>

                    {this.renderPurchaseOrders()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PurchaseOrderList;