
class Customer{
    constructor(name,){
        this.name = name;
        this.money = 0;
        this.purchases = []
    }

    addFunds(num){
      return  this.money += num
    }

    withdrawFunds(num){
        if(this.money < num){
            throw new Error
        }else{
        return this.money -= num
        }
    }
}


module.exports = Customer
