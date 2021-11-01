import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';
function App() {
        return (
            <div>
                <Router>

                        <div className="container">
                            <Switch>
                                  <Route path = "/" exact component = {EmployeeList}></Route>
                                  <Route path = "/employees" exact component = {EmployeeList}></Route>
                                  <Route path = "/add-employee/:id" exact component = {AddEmployee}></Route>
                                  <Route path = "/view-employee/:id" exact component = {ViewEmployee}></Route>
                            </Switch>
                        </div>

                </Router>
            </div>

          );





}

export default App;
