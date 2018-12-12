import React, {Component} from 'react';

class Inventory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            max_buildable_product: this.calculateMaximumBuildableProduct()
        }
    }

    calculateMaximumBuildableProduct(){
        // for each part
        var leastAvailabilityRatio = Number.POSITIVE_INFINITY;
        this.props.inventory.forEach((part) => {
            // calculate the ratios of available items compared to required
            const availabilityRatio = part.quantity / this.props.product.parts[part.part];

            // pick the smallest one
            if (availabilityRatio < leastAvailabilityRatio){
                leastAvailabilityRatio = availabilityRatio;
            }

        });

        // floor and return the number
        return Math.floor(leastAvailabilityRatio);
    };

    calculateTotalPartValueInInventory(){
        if(this.props.inventory){
            return this.props.inventory.reduce((acc, part) => {
                return acc + part.value;
            }, 0)
        }
    };

    renderItems() {
        if (this.props.inventory) {
            return (
                this.props.inventory.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{item.part || ""}</td>
                            <td>$ {item.price_per_unit || 0}</td>
                            <td>{item.quantity || 0}</td>
                            <td>$ {item.value || 0}</td>
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

                <br/>

                <h4>Product's Part Requirement: Car</h4>
                <table className={"table table-bordered table-striped"}>
                    <tbody>
                    <tr>
                        <th>Part</th>
                        <th>Quantity required to build</th>
                    </tr>

                    <tr>
                        <td>Steering Wheel</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Tire</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Breaks</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Steel</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Windshield</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>V12 Engine</td>
                        <td>1</td>
                    </tr>


                    </tbody>
                </table>

                <br/>

                <table className={"table table-bordered table-striped"}>
                    <tbody>
                    <tr>
                        <th>Total Value of Parts in Inventory</th>
                        <th>COG/Product</th>
                        <th>Total Buildable Products</th>
                        <th>Total Value of Buildable Products</th>
                    </tr>

                    <tr>
                        <td>$ {this.calculateTotalPartValueInInventory()}</td>
                        <td>$ {this.props.product.cogs}</td>
                        <td>{this.state.max_buildable_product}</td>
                        <td>$ {this.state.max_buildable_product * this.props.product.price}</td>
                    </tr>


                    </tbody>
                </table>
            </div>
        );
    }
}

export default Inventory;