import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
class EmployeeList extends Component {

constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
       this.addEmployee = this.addEmployee.bind(this);
       this.deleteEmployee = this.deleteEmployee.bind(this);
    }


componentDidMount(){

        this.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

render() {
            return (
            <div>

                    <h1>EmployeeList</h1>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                 </div>
                 <br></br>
                                  <div className = "row">
                                 <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
{

                        this.state.employees.map(
                            employee =>
                            <tr key = {employee.empId}>
                                 <td> { employee.empName} </td>
                                 <td> {employee.empEmail}</td>
                                 <td> {employee.empDesignation}</td>
                                 <td>
                                     <button onClick={ () => this.editEmployee(employee.empId)} className="btn btn-info">Update </button>
                                     <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.empId)} className="btn btn-info">View </button>
                                     <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.empId)} className="btn btn-danger">Delete </button>
                                 </td>
                            </tr>
                        )
                    }
                    </tbody>
                  </table>

                </div>
                 </div> );
  }



getEmployees()
{
        return EmployeeService.getEmployees();
    }

addEmployee(){
    this.props.history.push('/add-employee/_add');
}

viewEmployee(id){
  this.props.history.push('/view-employee/'+id);
}

editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
}
    deleteEmployee(id){
            EmployeeService.deleteEmployee(id).then( res => {
                this.setState({employees: this.state.employees.filter(employee => employee.empId !== id)});
            });
        }

}
export default EmployeeList;
