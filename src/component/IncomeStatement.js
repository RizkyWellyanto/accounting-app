import React, {Component} from 'react';

class IncomeStatement extends Component {
    constructor(props) {
        super(props);

        const incomeStatement = this.props.income_statement;

        const gross_profit = incomeStatement.sales.sales - incomeStatement.sales.cogs;
        const total_expenses = incomeStatement.expenses.payroll + incomeStatement.expenses.annual_expenses;
        const operating_income = gross_profit - total_expenses;
        const net_income = operating_income + incomeStatement.other_income - incomeStatement.expenses.bills - incomeStatement.income_taxes;

        this.state = {
            gross_profit,
            total_expenses,
            operating_income,
            net_income
        };
    }

    render() {
        const incomeStatement = this.props.income_statement;

        return (
            <div>
                <h4>Sales</h4>
                <table className={"table table-bordered table-striped"}>
                    <tbody>
                    <tr>
                        <td>Sales</td>
                        <td>$ {incomeStatement.sales.sales}</td>
                    </tr>
                    <tr>
                        <td>COGS</td>
                        <td>$ {incomeStatement.sales.cogs}</td>
                    </tr>
                    <tr>
                        <td>Gross Profit</td>
                        <td>$ {this.state.gross_profit}</td>
                    </tr>
                    </tbody>
                </table>

                <h4>Expenses</h4>
                <table className={"table table-bordered table-striped"}>
                    <tbody>
                    <tr>
                        <td>Payroll</td>
                        <td>$ {incomeStatement.expenses.payroll}</td>
                    </tr>
                    <tr>
                        <td>Payroll Witholding</td>
                        <td>$ {incomeStatement.expenses.payroll_witholding}</td>
                    </tr>
                    <tr>
                        <td>Bills</td>
                        <td>$ {incomeStatement.expenses.bills}</td>
                    </tr>
                    <tr>
                        <td>Annual Expenses</td>
                        <td>$ {incomeStatement.expenses.annual_expenses}</td>
                    </tr>
                    <tr>
                        <td>Total Expenses</td>
                        <td>$ {this.state.total_expenses}</td>
                    </tr>
                    </tbody>
                </table>

                <br/>
                <table className={"table table-bordered table-striped"}>
                    <tbody>
                    <tr>
                        <td>Other Income</td>
                        <td>$ {incomeStatement.other_income}</td>
                    </tr>
                    <tr>
                        <td>Operating Income</td>
                        <td>$ {this.state.operating_income}</td>
                    </tr>
                    <tr>
                        <td>Bills</td>
                        <td>$ {incomeStatement.expenses.bills}</td>
                    </tr>
                    <tr>
                        <td>Income Taxes</td>
                        <td>$ {incomeStatement.income_taxes}</td>
                    </tr>
                    <tr>
                        <td>Net Income</td>
                        <td>$ {this.state.net_income}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IncomeStatement;