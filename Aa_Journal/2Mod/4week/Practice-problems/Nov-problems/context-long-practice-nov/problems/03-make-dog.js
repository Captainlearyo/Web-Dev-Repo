// Your code here

class Dog{
	constructor(name){
		this.name = name
	}

	static makeJet() {
		let jet = new Dog('Jet')
		return jet
	}
	changeName(newName) {
		this.name = newName
	}
	speak(word){
		return `${this.name} says ${word}`
	}
}

let dog = new Dog('Spot')
let dog2 = new Dog('Rex')
console.log()
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
