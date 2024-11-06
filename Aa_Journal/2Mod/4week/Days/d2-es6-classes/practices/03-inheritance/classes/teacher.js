const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience){
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }
 static combinedYearsOfExperience([...teachers]){
  //let years = 0;
  //teachers.forEach(teacher => years += teacher.yearsOfExperience)
  //return years;
  return teachers.reduce((years, teacher) => years + teacher.yearsOfExperience, 0)

  }

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}