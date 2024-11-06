const Customer = require("./customer");


class PremiumCustomer extends Customer{
    constructor(name, money, purchases = []){
        super(name, money, purchases)
        this.money = 5
    }


}


module.exports = PremiumCustomer
