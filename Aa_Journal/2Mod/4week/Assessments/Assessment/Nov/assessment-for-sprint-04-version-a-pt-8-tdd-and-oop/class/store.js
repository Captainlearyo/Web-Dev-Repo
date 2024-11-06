const StoreItem = require("./store-item")
const PremiumCustomer = require("./premium-customer")

class Store{
    constructor(){
        this.items = []
    }


    addItem(item){
        if(item.isValid()){
        this.items.push(item)
        }else{
            throw new Error
        }
    }

    getStoreItemPrices(){
    let newArr = []
    this.items.forEach(item => {
        newArr.push(`${item.name}: $${item.price}`)
    });
     return newArr
}

    doTransaction(customer, storeItem){
       let inStore =  this.items.find(item => item.name === storeItem);
        if(customer instanceof PremiumCustomer) customer.money += 1
        if(customer.money >= inStore.price){
            customer.money -= inStore.price
            customer.purchases.push(inStore.name)
        }else{
            throw Error()
        }
        console.log(customer.money)
    }

}
module.exports = Store
