import React, { Component } from 'react';
import {Vendor} from "../model/Vendor";
import {Customer} from "../model/Customer";

class CustomerAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company_name: "",
            part: "",
            price_per_unit: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
        };

        this.handleCompanyName = this.handleCompanyName.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleAddress1 = this.handleAddress1.bind(this);
        this.handleAddress2 = this.handleAddress2.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleZip = this.handleZip.bind(this);
        this.handlePrice= this.handlePrice.bind(this);

        this.handleNewCustomer= this.handleNewCustomer.bind(this);
    }

    handleCompanyName(e) {
        this.setState({
            company_name: e.target.value
        })
    }

    handleFirstName(e) {
        this.setState({
            first_name: e.target.value
        })
    }

    handleLastName(e) {
        this.setState({
            last_name: e.target.value
        })
    }

    handleAddress1(e) {
        this.setState({
            address1: e.target.value
        })
    }

    handleAddress2(e) {
        this.setState({
            address2: e.target.value
        })
    }

    handleCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    handleState(e) {
        this.setState({
            state: e.target.value
        })
    }

    handleZip(e) {
        this.setState({
            zip: e.target.value
        })
    }

    handlePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    handleNewCustomer() {
        const {company_name, first_name, last_name, address1, address2, city, state, zip, price} = this.state;

        const newCustomer = new Customer(company_name, first_name, last_name, address1, address2, city, state, zip, price);

        const newList = [...this.props.customer_list, newCustomer];

        this.props.onSubmit(newList);
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Company Name"
                           onChange={this.handleCompanyName}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name"
                           onChange={this.handleFirstName}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name"
                           onChange={this.handleLastName}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Address 1"
                           onChange={this.handleAddress1}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Address 2"
                           onChange={this.handleAddress2}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="City"
                           onChange={this.handleCity}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="State"
                           onChange={this.handleState}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Zip Code"
                           onChange={this.handleZip}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Price"
                           onChange={this.handlePrice}/>
                </div>

                <button type="button" className="btn btn-default btn-primary" onClick={this.handleNewCustomer}>Add
                    Customer
                </button>
            </form>
        );
    }
}

export default CustomerAdd;