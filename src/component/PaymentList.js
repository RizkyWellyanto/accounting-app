import React, {Component} from 'react';

class PaymentList extends Component {
    constructor(props) {
        super(props);
    }

    calculateDisbursement(){
        if(this.props.payment_list){
            return this.props.payment_list.reduce((acc, payment) => {return acc + payment.disbursement}, 0)
        }
    }

    calculateWitholdings(){
        if(this.props.payment_list){
            return this.props.payment_list.reduce((acc, payment) => {return acc + payment.witholding}, 0)
        }
    }

    renderVendors() {
        if (this.props.payment_list) {
            return (
                this.props.payment_list.map((payment, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{payment.date || ""}</td>
                            <td>{payment.employee.last_name || ""}</td>
                            <td>{payment.disbursement|| ""}</td>
                            <td>{payment.witholding || ""}</td>
                        </tr>
                    )
                })
            )
        }
    }

    render() {
        return (
            <div>
                <table className={"table table-bordered table-striped"}>
                    <tbody>
                    <tr>
                        <th>Date Paid</th>
                        <th>Employee</th>
                        <th>Disbursement</th>
                        <th>Witholding</th>
                    </tr>

                    {this.renderVendors()}
                    </tbody>
                </table>

                <table className={"table table-bordered table-striped"}>
                    <tbody>
                    <tr>
                        <th>Total Disbursement</th>
                        <th>Total Witholding</th>
                    </tr>

                    <tr>
                        <td>{this.calculateDisbursement()}</td>
                        <td>{this.calculateWitholdings()}</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default PaymentList;