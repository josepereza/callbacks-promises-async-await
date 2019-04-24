// Fictitious Database
let employees = [{
    id: 1,
    name: 'Débora'
}, {
    id: 2,
    name: 'Adriano'
}, {
    id: 3,
    name: 'Sônia'
}];

let salaries = [{
    id: 1,
    salary: 2000
}, {
    id: 2,
    salary: 3000
}];

// Employee
let getEmployee = async id => {

        let employeeDB = employees.find(employee =>  employee.id === id);
        // console.log(employeeDB);
        if(!employeeDB) {
            throw new Error(`Do not exist an employee with id ${ id }`);            
        } else {
            return employeeDB;
        }  
} 

// Salary
let getSalary = async employee => {

        let salaryDB = salaries.find(salary => salary.id === employee.id);
        // console.log(salaryDB);    
        if(!salaryDB) {
            throw new Error(`Do no exist a salary for the employee ${ employee.name }`);
        } else {
            return {
                name: employee.name,
                salary: salaryDB.salary,
                id: employee.id 
            };
        }
}

let getInfo = async id => {

    let employee = await getEmployee(id);
    let resp = await getSalary(employee);
    // console.log(employee);
    // console.log(resp);
    return(`${resp.name}'s salary is ${resp.salary}`);
    
}

getInfo(10)
    .then(msg => 
        console.log(msg))
    .catch(err => console.log(err.message));

