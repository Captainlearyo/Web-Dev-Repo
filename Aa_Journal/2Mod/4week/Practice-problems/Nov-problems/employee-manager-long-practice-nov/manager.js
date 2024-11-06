const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, salary, title, manager){
    super(name, salary, title, manager);
        this.employees = []
    }
    addEmployee(employee){
       this.employees.push(employee)
        return this.employees
    }
    _totalSubSalary(){
        let sum = 0;
        for(let emp of this.employees){
            sum += emp.salary;
            if(emp.employees){
            for(let subEmployee of emp.employees){
                sum += subEmployee.salary;
            }
        }
     }
        return sum
    }

    calculateBonus(multiplier){
        return (this.salary + this._totalSubSalary()) * multiplier;
     }
}

module.exports = Manager;

const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

console.log('After: ', splinter);
