import React, { Component } from 'react';
import {PurchaseOrder} from "../model/PurchaseOrder";

class PurchaseOrderAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current_part: "",
            quantity: 0,
            price_per_part: 0,
        };

        this.handleNewPurchaseOrder = this.handleNewPurchaseOrder.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleQuantity= this.handleQuantity.bind(this);
        this.handlePricePerPart= this.handlePricePerPart.bind(this);
    }

    renderPartOptions() {
        if (this.props.inventory) {
            return (
                this.props.inventory.map((part, idx) => {
                    return <option key={idx} value={idx}>{part.part}</option>
                })
            )
        }
    }

    handleChange(event) {
        this.setState({
            current_part: this.props.inventory[event.target.value]
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


    handleNewPurchaseOrder() {
        if (this.state.current_part && this.props.po_list) {

            const newPO = new PurchaseOrder(this.props.po_list.length, this.state.current_part, this.state.quantity, this.state.price_per_part);

            // TODO do accounting math here

            const newList = [...this.props.po_list, newPO];

            this.props.onSubmit(newList);
        }
    }

    render() {
        return (
            <form className="form-inline">
                <select value={this.state.current_part} onChange={this.handleChange} className="form-control">
                    <option value={null} disabled>Select Part</option>
                    {this.renderPartOptions()}
                </select>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Quantity"
                           onChange={this.handleQuantity}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Price Per Part"
                           onChange={this.handlePricePerPart}/>
                </div>

                <button type="button" className="btn btn-default btn-primary" onClick={this.handleNewPurchaseOrder}>Order Parts
                </button>
            </form>
        );
    }
}

export default PurchaseOrderAdd;