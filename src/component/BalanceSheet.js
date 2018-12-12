import React, { Component } from 'react';

class BalanceSheet extends Component {
    constructor(props) {
        super(props);

        const balanceSheet = this.props.balance_sheet;

        const totalCurrentAssets = balanceSheet.assets.cash + balanceSheet.assets.accounts_receivable + balanceSheet.assets.inventory;
        const totalCurrentLiabilities = balanceSheet.liabilities.accounts_payable + balanceSheet.liabilities.notes_payable + balanceSheet.liabilities.accruals;
        const totalFixedAssets = balanceSheet.assets.land_and_buildings + balanceSheet.assets.equipment + balanceSheet.assets.furniture_and_fixtures;
        const totalLongTermDebt = balanceSheet.liabilities.mortgage;
        const totalAssets = totalCurrentAssets + totalFixedAssets;
        const totalLiabilities = totalCurrentLiabilities + totalLongTermDebt;
        const netWorth = totalAssets-totalLiabilities;

        this.state = {
            totalCurrentAssets,
            totalCurrentLiabilities,
            totalFixedAssets,
            totalLongTermDebt,
            totalAssets,
            totalLiabilities,
            netWorth
        };
    }

    render() {
        const balanceSheet = this.props.balance_sheet;

        return (
            <div>
                <table className={"table table-bordered table-striped"}>
                    <tbody>
                    <tr>
                        <th colSpan={2}>Assets</th>
                        <th colSpan={2}>Liabilities</th>
                    </tr>

                    <tr>
                        <td>Cash</td>
                        <td>$ {balanceSheet.assets.cash}</td>

                        <td>Accounts Payable</td>
                        <td>$ {balanceSheet.liabilities.accounts_payable}</td>
                    </tr>

                    <tr>
                        <td>Accounts Receivable</td>
                        <td>$ {balanceSheet.assets.accounts_receivable}</td>

                        <td>Notes Payable</td>
                        <td>$ {balanceSheet.liabilities.notes_payable}</td>
                    </tr>

                    <tr>
                        <td>Inventory</td>
                        <td>$ {balanceSheet.assets.inventory}</td>

                        <td>Accruals</td>
                        <td>$ {balanceSheet.liabilities.accruals}</td>
                    </tr>

                    <tr>
                        <td>Total Current Assets</td>
                        <td>$ {this.state.totalCurrentAssets}</td>

                        <td>Total Current Liabilities</td>
                        <td>$ {this.state.totalCurrentLiabilities}</td>
                    </tr>

                    <br/>

                    <tr>
                        <td>Land/Building</td>
                        <td>$ {balanceSheet.assets.land_and_buildings}</td>

                        <td>Mortgage</td>
                        <td>$ {balanceSheet.liabilities.mortgage}</td>
                    </tr>

                    <tr>
                        <td>Equipment</td>
                        <td>$ {balanceSheet.assets.equipment}</td>

                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>Total Fixed Assets</td>
                        <td>$ {this.state.totalFixedAssets}</td>


                        <td>Total Long Term Debt</td>
                        <td>$ {this.state.totalLongTermDebt}</td>
                    </tr>

                    <br/>

                    <tr>
                        <td>Total Assets</td>
                        <td>$ {this.state.totalAssets}</td>


                        <td>Total Liabilities</td>
                        <td>$ {this.state.totalLiabilities}</td>
                    </tr>

                    <tr>
                        <td colSpan={2}>Net Worth</td>
                        <td colSpan={2}>{this.state.netWorth}</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default BalanceSheet;