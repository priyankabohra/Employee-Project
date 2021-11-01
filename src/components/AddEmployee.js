import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
class AddEmployee extends Component {

constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            empName: '',
            empDesignation: '',
            empEmail: ''
        }
    }

 componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({empName: employee.empName,
                    empDesignation: employee.empDesignation,
                    empEmail : employee.empEmail
                });
            });
        }
    }

render() {
    return (
                <div>
                    <br></br>
                       <div className = "container">
                            <div className = "row">
                                <div className = "card col-md-6 offset-md-3 offset-md-3">
                                    {
                                        this.getTitle()
                                    }
                                    <div className = "card-body">
                                        <form>
                                            <div className = "form-group">
                                                <label> Employee Name: </label>
                                                <input placeholder="Employee Name" name="empName" className="form-control"
                                                    value={this.state.empName} onChange={this.changeEmpNameHandler}/>
                                            </div>
                                            <div className = "form-group">
                                                <label> Designation: </label>
                                                <input placeholder="Designation" name="empDesignation" className="form-control"
                                                    value={this.state.empDesignation} onChange={this.changeEmpDesignationHandler}/>
                                            </div>
                                            <div className = "form-group">
                                                <label> Email Address: </label>
                                                <input placeholder="Email Address" name="empEmail" className="form-control"
                                                    value={this.state.empEmail} onChange={this.changeEmailHandler}/>
                                            </div>

                                            <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                       </div>
                </div>
                )
  }

getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }

cancel(){
       this.props.history.push('/employees');
   }


saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {empName: this.state.empName, empDesignation: this.state.empDesignation, empEmail: this.state.empEmail};

        if(this.state.id === '_add'){
            this.createEmployee(employee).then(res =>{
                this.props.history.push('/');
            });
        }else{
            this.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/');
            });
        }
    }

createEmployee(employee){ 
        return EmployeeService.createEmployee(employee);
    }
updateEmployee(employee, employeeId){
     return EmployeeService.updateEmployee(employee, employeeId);
}

changeEmpNameHandler= (event) => {
        this.setState({empName: event.target.value});
    }

    changeEmpDesignationHandler= (event) => {
        this.setState({empDesignation: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({empEmail: event.target.value});
    }

 addEmployee(){
         this.props.history.push('/add-employee/_add');
     }
}
export default AddEmployee;