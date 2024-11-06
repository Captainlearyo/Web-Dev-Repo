
class CallCenter{
	constructor(name){
		this.name = name
	}

	sayHello = () => {
		console.log(`Hello this is ${this.name}`)
	}

	callMeLater(delay){
		setTimeout(this.sayHello, delay)
	}

}

let john = new CallCenter("John");
let msecs = 500;
john.callMeLater(msecs)
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
