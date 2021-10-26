import React, { Component } from 'react'
import axios from 'axios';

class ViewEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }


getEmployeeById(employeeId){
    return axios.get('http://localhost:8080/employee/' + employeeId);
}

componentDidMount(){
        this.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

 render(){
    return(
                          <div>
                           <br></br>
                           <div className = "card col-md-6 offset-md-3">
                               <h3 className = "text-center data"> View Employee Details</h3>
                               <div className = "card-body">
                                   <div className = "style color">
                                       <label> Employee Name </label>
                                <input placeholder="Employee Name" name="empName" className="form-control"
                                value={ this.state.employee.empName }onChange={this.changeEmpNameHandler}/>


                                   </div>
                                   <div className = "row style color">
                                       <label> Employee Email ID </label>
                                        <input placeholder="Employee Email ID " name="empEmail" className="form-control"
                                       value= { this.state.employee.empEmail }onchange={this.changeEmpEmail}/>
                                   </div>

                                   <div className = "row style color">
                                       <label> Employee Designation </label>
                                       <input placeholder="Employee Designation " name="empDesignation" className="form-control"
                                       value={ this.state.employee.empDesignation }onchange={this.changeEmpDesignation}/>
                                   </div>
                               </div>

                           </div>
                       </div>)
 }

}
export default ViewEmployee;