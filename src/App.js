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
import PaymentList from "./component/PaymentList";
import PaymentAdd from "./component/PaymentAdd";

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

            // lists
            customer_list: [test_customer],
            employee_list: [test_employee],
            inventory: [test_item1, test_item2],
            vendor_list: [test_vendor],
            payment_list: [],

            invoice_list: [],
            po_list: [],

            // temporary objects
            current_employee: null,
            current_vendor: null,
            current_customer: null,

            // accounting variables
            income_statement: {
                sales: {
                    sales: 0,
                    cogs: 0,
                    gross_profit: 0
                },
                expenses: {
                    payroll: 0,
                    payroll_witholding: 0,
                    bills: 0,
                    annual_expenses: 0,
                    total_expenses: 0,
                },
                other_income: 0,
                operating_income: 0,
                income_taxes: 0,
                net_income: 0
            },
            balance_sheet: {
                assets: {
                    cash: 0,
                    accounts_receivable: 0,
                    inventory: 0,
                    total_current_assets: 0,
                    land_and_buildings: 0,
                    equipment: 0,
                    furniture_and_fixtures: 0,
                    total_fixed_assets: 0,
                    total_assets: 0,
                },
                liabilities: {
                    accounts_payable: 0,
                    notes_payable: 0,
                    accruals: 0,
                    total_current_liabilities: 0,
                    mortgage: 0,
                    total_long_term_debt: 0,
                    total_liabilities: 0,
                },
                net_worth: 0,
            }

        };

        this.navHandler = this.navHandler.bind(this);

        this.employeeListHandler = this.employeeListHandler.bind(this);
        this.vendorListHandler = this.vendorListHandler.bind(this);
        this.customerListHandler = this.customerListHandler.bind(this);
        this.paymentListHandler= this.paymentListHandler.bind(this);

        // this.currentCustomerHandler= this.currentCustomerHandler.bind(this);
        // this.currentEmployeeHandler= this.currentEmployeeHandler.bind(this);
        // this.currentVendorHandler= this.currentVendorHandler.bind(this);
    }

    // currentEmployeeHandler(employee) {
    //     this.setState({
    //         current_employee: employee
    //     })
    // }
    //
    // currentCustomerHandler(customer) {
    //     this.setState({
    //         current_customer: customer
    //     })
    // }
    //
    // currentVendorHandler(vendor) {
    //     this.setState({
    //         current_vendor: vendor
    //     })
    // }

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

    paymentListHandler(payment_list) {
        this.setState({
            payment_list: payment_list
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
                        onSubmit={(customerList) => {
                            this.customerListHandler(customerList)
                        }}/>
                </div>);

            case "payment":
                return (<div>
                    <h3>Payroll History</h3>
                    <PaymentList
                        payment_list = {this.state.payment_list}/>
                    <PaymentAdd
                        employee_list = {this.state.employee_list}
                        payment_list = {this.state.payment_list}
                        onSubmit={(payment_list) => {
                            this.paymentListHandler(payment_list)
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
