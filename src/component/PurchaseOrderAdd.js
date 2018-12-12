import React, { Component } from 'react';
import {PurchaseOrder} from "../model/PurchaseOrder";
import clone from "clone";
import {Part} from "../model/Part";

class PurchaseOrderAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curr_idx: -1,
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


    handleNewPurchaseOrder() {
        if (this.state.curr_idx >= 0 && this.props.po_list) {
            const currentPart = this.props.inventory[this.state.curr_idx];
            const newPO = new PurchaseOrder(this.props.po_list.length, currentPart, this.state.quantity, currentPart.price_per_part);

            var newBalanceSheet = clone(this.props.balance_sheet);

            // add new purchase order
            const newList = [...this.props.po_list, newPO];

            // increase item in inventory
            var newInventory = this.props.inventory.map((partInInventory) => {
                if(partInInventory.part === currentPart.part){
                    const part = partInInventory.part;
                    const ppu = partInInventory.price_per_unit;
                    const qty = partInInventory.quantity + this.state.quantity;
                    const reord = partInInventory.quantity < this.props.product.parts[partInInventory] ? "Yes" : "No";

                    return new Part(part, ppu, qty, reord);
                }

                return partInInventory
            });

            // increase accounts payable in balance sheet, and increase inventory in balance sheet
            newBalanceSheet.liabilities.accounts_payable += newPO.total;
            newBalanceSheet.assets.inventory += newPO.total;

            this.props.onSubmit(newList, newInventory, newBalanceSheet);
        }
    }

    render() {
        return (
            <form className="form-inline">
                <select value={this.state.curr_idx} onChange={this.handleChange} className="form-control">
                    <option value={-1} disabled>Select Part</option>
                    {this.renderPartOptions()}
                </select>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Quantity"
                           onChange={this.handleQuantity}/>
                </div>

                <button type="button" className="btn btn-default btn-primary" onClick={this.handleNewPurchaseOrder}>Order Parts
                </button>
            </form>
        );
    }
}

export default PurchaseOrderAdd;