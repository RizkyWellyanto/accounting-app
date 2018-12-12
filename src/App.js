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
import PurchaseOrderAdd from "./component/PurchaseOrderAdd";
import PurchaseOrderList from "./component/PurchaseOrderList";
import InvoiceList from "./component/InvoiceList";
import InvoiceAdd from "./component/InvoiceAdd";
import BalanceSheet from "./component/BalanceSheet";
import IncomeStatement from "./component/IncomeStatement";
import {Employee} from "./model/Employee";
import {Vendor} from "./model/Vendor";
import {Part} from "./model/Part";
import {Customer} from "./model/Customer";
import PaymentList from "./component/PaymentList";
import PaymentAdd from "./component/PaymentAdd";

// initial items
const test_employee1 = new Employee("Alex", "Anderson", "", "", "Champaign", "IL", "", "61820", "", "100000");
const test_employee2 = new Employee("Betty", "Bobbitt", "", "", "Urbana", "IL", "", "61801", "", "120000");
const test_employee3 = new Employee("Cathy", "Clock", "", "", "Chicago", "IL", "", "61234", "", "80000");
const test_vendor1 = new Vendor("Lotus", "Steering Wheel", "100", "", "", "", "", "");
const test_vendor2 = new Vendor("Michelin", "Tire", "400", "", "", "", "", "");
const test_vendor3 = new Vendor("Brembo", "Brakes", "150", "", "", "", "", "");
const test_vendor4 = new Vendor("Alcoa", "Steel", "5000", "", "", "", "", "");
const test_vendor5 = new Vendor("Corning", "Windshield", "650", "", "", "", "", "");
const test_vendor6 = new Vendor("Lamborghini", "V12 Engine", "24650", "", "", "", "", "");
const test_customer1 = new Customer("Amazon", "Jeff", "Bezos", "", "", "", "", "");
const test_customer2 = new Customer("Microsoft", "William", "Gates", "", "", "", "", "");
const test_customer3 = new Customer("Tesla", "Elon", "Musk", "", "", "", "", "");
const test_item1 = new Part("Steering Wheel", "100", "300", "No");
const test_item2 = new Part("Tire", "400", "158", "No");
const test_item3 = new Part("Brakes", "150", "180", "No");
const test_item4 = new Part("Steel", "5000", "10", "No");
const test_item5 = new Part("Windshield", "650", "120", "No");
const test_item6 = new Part("V12 Engine", "24650", "3", "No");

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: null,

            // lists
            customer_list: [test_customer1, test_customer2, test_customer3],
            employee_list: [test_employee1, test_employee2, test_employee3],
            inventory: [test_item1, test_item2, test_item3, test_item4, test_item5, test_item6],
            vendor_list: [test_vendor1, test_vendor2, test_vendor3, test_vendor4, test_vendor5, test_vendor6],
            payment_list: [],
            invoice_list: [],
            po_list: [],

            // actual product
            product:{
                parts: {
                    "Steering Wheel": 1,
                    "Tire": 4,
                    "Brakes": 4,
                    "Steel": 1,
                    "Windshield": 1,
                    "V12 Engine": 1,
                },
                price: 175000,
                cogs: 32600,
                // units_in_stock: 100,
            },

            // accounting variables
            income_statement: {
                sales: {
                    sales: 1000000,
                    cogs: 308000,
                },
                expenses: {
                    payroll: 96762.6,
                    payroll_witholding: 53237.4,
                    bills: 0,
                    annual_expenses: 199999.92,
                },
                other_income: 0,
                operating_income: 0,
                income_taxes: 0,
            },
            balance_sheet: {
                assets: {
                    cash: 225000,
                    accounts_receivable: 0,
                    inventory: 322150,
                    land_and_buildings: 500000,
                    equipment: 250000,
                    furniture_and_fixtures: 100000,
                },
                liabilities: {
                    accounts_payable: 0,
                    notes_payable: 0,
                    accruals: 0,
                    mortgage: 50000,
                },
            }

        };

        this.navHandler = this.navHandler.bind(this);

        this.employeeListHandler = this.employeeListHandler.bind(this);
        this.vendorListHandler = this.vendorListHandler.bind(this);
        this.customerListHandler = this.customerListHandler.bind(this);
        this.paymentListHandler = this.paymentListHandler.bind(this);
        this.invoiceListHandler = this.invoiceListHandler.bind(this);
        this.inventoryHandler = this.inventoryHandler.bind(this);
        this.purchaseOrderListHandler = this.purchaseOrderListHandler.bind(this);
        this.balanceSheetHandler = this.balanceSheetHandler.bind(this);
        this.incomeStatementHandler = this.incomeStatementHandler.bind(this);
    }

    balanceSheetHandler(balance_sheet){
        this.setState({
            balance_sheet: balance_sheet
        })
    }

    incomeStatementHandler(income_statement){
        this.setState({
            income_statement: income_statement
        })
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

    paymentListHandler(payment_list) {
        this.setState({
            payment_list: payment_list
        })
    }

    invoiceListHandler(invoice_list) {
        this.setState({
            invoice_list: invoice_list
        })
    }

    inventoryHandler(inventory) {
        this.setState({
            inventory: inventory
        })
    }

    purchaseOrderListHandler(po_list) {
        this.setState({
            po_list: po_list
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
                        payment_list={this.state.payment_list}/>
                    <PaymentAdd
                        balance_sheet={this.state.balance_sheet}
                        income_statement={this.state.income_statement}
                        employee_list={this.state.employee_list}
                        payment_list={this.state.payment_list}
                        onSubmit={(payment_list, balance_sheet, income_statement) => {
                            this.paymentListHandler(payment_list);
                            this.balanceSheetHandler(balance_sheet);
                            this.incomeStatementHandler(income_statement)
                        }}/>
                </div>);

            case "inventory":
                return (<div>
                    <h3>Inventory</h3>
                    <Inventory
                        product={this.state.product}
                        inventory={this.state.inventory}/>
                </div>);

            case "purchase_order":
                return (<div>
                    <h3>Purchase Order</h3>
                    <PurchaseOrderList
                        po_list={this.state.po_list}/>
                    <PurchaseOrderAdd
                        product={this.state.product}
                        balance_sheet={this.state.balance_sheet}
                        income_statement={this.state.income_statement}
                        inventory={this.state.inventory}
                        po_list={this.state.po_list}
                        onSubmit={(poList, inventory, balance_sheet, income_statement) => {
                            this.purchaseOrderListHandler(poList);
                            this.inventoryHandler(inventory);
                            this.balanceSheetHandler(balance_sheet);
                            this.incomeStatementHandler(income_statement);
                        }}/>
                </div>);

            case "invoice":
                return (<div>
                    <h3>Invoice</h3>
                    <InvoiceList
                        invoice_list={this.state.invoice_list}/>
                    <InvoiceAdd
                        product={this.state.product}
                        balance_sheet={this.state.balance_sheet}
                        income_statement={this.state.income_statement}
                        inventory={this.state.inventory}
                        customer_list={this.state.customer_list}
                        invoice_list={this.state.invoice_list}
                        onSubmit={(invoiceList, inventory, balance_sheet) => {
                            this.invoiceListHandler(invoiceList);
                            this.inventoryHandler(inventory);
                            this.balanceSheetHandler(balance_sheet);
                        }}/>
                </div>);

            case "balance_sheet":
                return (<div>
                    <h3>Balance Sheet</h3>
                    <BalanceSheet
                        balance_sheet={this.state.balance_sheet}/>
                </div>);

            case "income_statement":
                return (<div>
                    <h3>Income Statement</h3>
                    <IncomeStatement
                        income_statement={this.state.income_statement}/>
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
