import React, {Component} from 'react';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
    }

    renderEmployees() {
        if (this.props.employee_list) {
            return (
                this.props.employee_list.map((employee, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{employee.first_name || ""}</td>
                            <td>{employee.last_name || ""}</td>
                            <td>{employee.address1 || ""}</td>
                            <td>{employee.address2 || ""}</td>
                            <td>{employee.city || ""}</td>
                            <td>{employee.state || ""}</td>
                            <td>{employee.zip || ""}</td>
                            <td>{employee.ssn || ""}</td>
                            <td>{employee.witholdings || ""}</td>
                            <td>{employee.salary || ""}</td>
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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address 1</th>
                        <th>Address 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zipcode</th>
                        <th>SSN</th>
                        <th>Witholdings</th>
                        <th>Salary</th>
                    </tr>

                {this.renderEmployees()}
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;