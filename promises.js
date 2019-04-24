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
    salary: 1500
}, {
    id: 2,
    salary: 3000
}];

// Employee
let getEmployee = id => {

    return new Promise((resolve, reject) => {

        let employeeDB = employees.find(employee =>  employee.id === id);
        // console.log(employeeDB);
        if(!employeeDB) {
            reject(`Do not exist an employee with id ${ id }`);            
        } else {
            resolve(employeeDB);
        }  
    }); 
} 

// Salary
let getSalary = (employee) => {

    return new Promise((resolve, reject) => {

        let salaryDB = salaries.find(salary => salary.id === employee.id);
        // console.log(salaryDB);    
        if(!salaryDB) {
            reject(`Do no exist a salary for the employee ${ employee.name }`);
        } else {
            resolve({
                name: employee.name,
                salary: salaryDB.salary,
                id: employee.id 
            });
        }
    });
}

// Handle with resolve and reject of get employee and get salary
getEmployee(5).then(employee => {
    console.log('Database employee', employee);   
    
    getSalary(employee).then(resp => {
        console.log(`${resp.name}'s salary is ${resp.salary}`);
    }, err => {
        console.log(err);        
    });
    
}, (err) => {
    console.log(err);   
});
