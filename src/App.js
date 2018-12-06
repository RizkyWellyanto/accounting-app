import React, {Component} from 'react';
import './App.css';
import './component/Menu'
import Menu from "./component/Menu";
import EmployeeList from "./component/EmployeeList";
import EmployeeAdd from "./component/EmployeeAdd";
import VendorList from "./component/VendorList";
import VendorAdd from "./component/VendorAdd";
import CustomerList from "./component/CustomerList";
import CustomerAdd from "./component/CustomerAdd";
import Inventory from "./component/Inventory";
import PurchaseOrderCreate from "./component/PurchaseOrderCreate";
import PurchaseOrderHistory from "./component/PurchaseOrderHistory";
import InvoiceHistory from "./component/InvoiceHistory";
import InvoiceCreate from "./component/InvoiceCreate";
import BalanceSheet from "./component/BalanceSheet";
import IncomeStatement from "./component/IncomeStatement";
import {Employee} from "./model/Employee";
import {Vendor} from "./model/Vendor";
import {Item} from "./model/Item";
import {Customer} from "./model/Customer";

const test_employee = new Employee("john", "smith", "", "", "Chicago", "IL", "", "123456789", "", "120000");
const test_vendor = new Vendor("Toyota", "Whip it up yeet yeet", "100", "", "", "", "", "");
const test_customer = new Customer("Amazon", "Jeff", "Bezos", "", "", "", "", "");
const test_item1 = new Item("toilet paper", "20", "1000", "20000", "No");
const test_item2 = new Item("tsar bomba", "200000", "1", "200000", "Yes");

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: null,

            customer_list: [test_customer],
            employee_list: [test_employee],
            inventory: [test_item1, test_item2],
            vendor_list: [test_vendor],
            invoice_list: [],
            po_list: [],
        };

        this.navHandler = this.navHandler.bind(this);

        this.employeeListHandler = this.employeeListHandler.bind(this);
        this.vendorListHandler = this.vendorListHandler.bind(this);
        this.customerListHandler = this.customerListHandler.bind(this);
    }

    employeeListHandler(employee_list) {
        this.setState({
            employee_list: employee_list
        })
    }

    vendorListHandler(vendor_list) {
        this.setState({
            vendor_list: vendor_list
        })
    }

    customerListHandler(customer_list) {
        this.setState({
            customer_list: customer_list
        })
    }

    navHandler(view) {
        this.setState({
            view: view
        })
    }

    renderView() {
        switch (this.state.view) {
            case "employee":
                return (<div>
                    <h3>Employees</h3>
                    <EmployeeList
                        employee_list={this.state.employee_list}
                    />
                    <EmployeeAdd
                        employee_list={this.state.employee_list}
                        onSubmit={(employeeList) => {
                            this.employeeListHandler(employeeList)
                        }}/>
                </div>);

            case "vendor":
                return (<div>
                    <h3>Vendors</h3>
                    <VendorList
                        vendor_list={this.state.vendor_list}/>
                    <VendorAdd
                        vendor_list={this.state.vendor_list}
                        onSubmit={(vendorList) => {
                            this.vendorListHandler(vendorList)
                        }}/>
                </div>);

            case "customer":
                return (<div>
                    <h3>Customers</h3>
                    <CustomerList
                        customer_list={this.state.customer_list}/>
                    <CustomerAdd
                        customer_list={this.state.customer_list}
                        onSubmit = {(customerList) => {
                            this.customerListHandler(customerList)
                        }}/>
                </div>);

            case "inventory":
                return (<div>
                    <h3>Inventory</h3>
                    <Inventory
                        inventory={this.state.inventory}/>
                </div>);

            case "purchase_order":
                return (<div>
                    <PurchaseOrderHistory/>
                    <PurchaseOrderCreate/>
                </div>);

            case "invoice":
                return (<div>
                    <InvoiceHistory/>
                    <InvoiceCreate/>
                </div>);

            case "balance_sheet":
                return (<div>
                    <BalanceSheet/>
                </div>);

            case "income_statement":
                return (<div>
                    <IncomeStatement/>
                </div>);

            default:
                return;
        }

    }


    render() {
        return (
            <div className="App">
                <h1>Business Accounting Tool</h1>
                <h2>by Muhammad Rizky Wellyanto</h2>

                <Menu
                    onClick={(view) => {
                        this.navHandler(view)
                    }}
                />

                {this.renderView()}
            </div>
        );
    }
}

export default App;
