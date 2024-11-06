const Customer = require("./customer");


class PremiumCustomer extends Customer{
    constructor(name, money = 5, purchases = []){
        super(name, money, purchases)
    }
}

module.exports = PremiumCustomer
