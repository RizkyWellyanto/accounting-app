import React, { Component } from 'react';
import {Employee} from "../model/Employee";
import {Vendor} from "../model/Vendor";

class VendorAdd extends Component {
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
        this.handlePart= this.handlePart.bind(this);
        this.handlePricePerUnit= this.handlePricePerUnit.bind(this);
        this.handleAddress1 = this.handleAddress1.bind(this);
        this.handleAddress2 = this.handleAddress2.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleZip = this.handleZip.bind(this);

        this.handleNewVendor = this.handleNewVendor.bind(this);
    }

    handleCompanyName(e) {
        this.setState({
            company_name: e.target.value
        })
    }

    handlePart(e) {
        this.setState({
            part: e.target.value
        })
    }

    handlePricePerUnit(e) {
        this.setState({
            price_per_unit: e.target.value
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

    handleNewVendor() {
        const {company_name, part, price_per_unit, address1, address2, city, state, zip} = this.state;

        const newVendor = new Vendor(company_name, part, price_per_unit, address1, address2, city, state, zip);

        const newList = [...this.props.vendor_list, newVendor];

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
                    <input type="text" className="form-control" placeholder="Part"
                           onChange={this.handlePart}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Price Per Unit"
                           onChange={this.handlePricePerUnit}/>
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

                <button type="button" className="btn btn-default btn-primary" onClick={this.handleNewVendor}>Add
                    Employee
                </button>
            </form>
        );
    }
}

export default VendorAdd;