// Your code here
const Employee = require('./employee');

 const john = new Employee('John Wick', 'Dog Lover');

 setTimeout(john.sayName.bind(john), 2*1000)

 setTimeout(john.sayOccupation.bind(john), 3*1000)
