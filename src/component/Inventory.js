import React, {Component} from 'react';

class Inventory extends Component {
    constructor(props) {
        super(props);
    }

    renderItems() {
        if (this.props.inventory) {
            return (
                this.props.inventory.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{item.part || ""}</td>
                            <td>{item.price_per_unit || 0}</td>
                            <td>{item.quantity || 0}</td>
                            <td>{item.value || 0}</td>
                            <td>{item.reorder || ""}</td>
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
                        <th>Part</th>
                        <th>Price Per Unit</th>
                        <th>Quantity</th>
                        <th>Value</th>
                        <th>Reorder</th>
                    </tr>

                    {this.renderItems()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Inventory;