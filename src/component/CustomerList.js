import React, { Component } from 'react';

class CustomerList extends Component {
    constructor(props) {
        super(props);
    }

    renderCustomers() {
        if (this.props.customer_list) {
            return (
                this.props.customer_list.map((customer, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{customer.company_name || ""}</td>
                            <td>{customer.first_name || ""}</td>
                            <td>{customer.last_name || ""}</td>
                            <td>{customer.address1 || ""}</td>
                            <td>{customer.address2 || ""}</td>
                            <td>{customer.city || ""}</td>
                            <td>{customer.state || ""}</td>
                            <td>{customer.zip || ""}</td>
                            <td>{customer.price || ""}</td>
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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address 1</th>
                    <th>Address 2</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Price</th>
                </tr>

                {this.renderCustomers()}
                </tbody>
            </table>
        );
    }
}

export default CustomerList;