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

let getEmployee = (id, callback) => {

    let employeeDB = employees.find( employee =>  employee.id === id );
    // console.log(employeeDB);
    if(!employeeDB) {
        callback(`Do not exist an employee with id ${ id }`);            
    } else {
        callback(null, employeeDB);
    }   
} 

let getSalary = (employee, callback) => {

    let salaryDB = salaries.find(salary => salary.id === employee.id);
    // console.log(salaryDB);    
    if(!salaryDB) {
        callback(`Do no exist a salary for the employee ${ employee.name }`);
    } else {
        callback(null, {
            name: employee.name,
            salary: salaryDB.salary,
            id: employee.id 
        });
    }
}

getEmployee(1, (err, employee) => {

    if(err) {
        return console.log(err);        
    }
    
    getSalary(employee, (err, resp) => {
        if(err) {
            return console.log(err);
        }
        console.log(`The salary of ${ resp.name } is ${ resp.salary}`);        
    });
    
});

