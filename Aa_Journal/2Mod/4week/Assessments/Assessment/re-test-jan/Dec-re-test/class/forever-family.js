const FosterFamily = require("./foster-family");


class ForeverFamily extends FosterFamily{
    constructor(lastName, capacity){
        super(lastName, capacity)
        this.expensesPaid = 0
        this.adoptionExpenses = 0
    }


}


module.exports = ForeverFamily
