import axios from 'axios';

const EMPLOYEE_API_BASE_URL= process.env.REACT_APP_API_URL;

class EmployeeService {

   constructor(){}

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+ 'employees');
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL + 'employee/', employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + 'employee/' + employeeId);
    }

    updateEmployee(employee){
        return axios.put(EMPLOYEE_API_BASE_URL + 'employee/', employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + 'employee/' + employeeId);
    }
}

export default new EmployeeService()