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

const test_employee = new Employee("john", "smith", "", "", "Chicago", "IL", "", "123456789", "", "120000");

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: null,

            customer_list: [],
            employee_list: [test_employee],
            invoice_list: [],
            vendor_list: [],
            po_list: [],
        };

        this.navHandler = this.navHandler.bind(this);
    }

    employeeListHandler(employee_list){
        this.state({
            employee_list: employee_list
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
                    <EmployeeAdd/>
                    <EmployeeList
                        employee_list = {this.state.employee_list}
                    />
                </div>);

            case "vendor":
                return (<div>
                    <VendorAdd/>
                    <VendorList/>
                </div>);

            case "customer":
                return (<div>
                    <CustomerAdd/>
                    <CustomerList/>
                </div>);

            case "inventory":
                return (<div>
                    <Inventory/>
                </div>);

            case "purchase_order":
                return (<div>
                    <PurchaseOrderCreate/>
                    <PurchaseOrderHistory/>
                </div>);

            case "invoice":
                return (<div>
                    <InvoiceCreate/>
                    <InvoiceHistory/>
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
