import React, {Component} from 'react';

class VendorList extends Component {
    constructor(props) {
        super(props);
    }

    renderVendors() {
        if (this.props.vendor_list) {
            return (
                this.props.vendor_list.map((vendor, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{vendor.company_name || ""}</td>
                            <td>{vendor.part|| ""}</td>
                            <td>{vendor.price_per_unit|| ""}</td>
                            <td>{vendor.address1 || ""}</td>
                            <td>{vendor.address2 || ""}</td>
                            <td>{vendor.city || ""}</td>
                            <td>{vendor.state || ""}</td>
                            <td>{vendor.zip || ""}</td>
                        </tr>
                    )
                })
            )
        }
    }

    render() {
        return (
            <table className={"table table-bordered table-striped"}>
                <tbody>
                <tr>
                    <th>Company Name</th>
                    <th>Part</th>
                    <th>Price Per Unit</th>
                    <th>Address 1</th>
                    <th>Address 2</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zipcode</th>
                </tr>

                {this.renderVendors()}
                </tbody>
            </table>
        );
    }
}

export default VendorList;