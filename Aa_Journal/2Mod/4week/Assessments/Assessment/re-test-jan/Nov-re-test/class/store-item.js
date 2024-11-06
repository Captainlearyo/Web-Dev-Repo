
class StoreItem{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }


    isValid(){
        if(this.name && this.price > 0){
            return true
        }else{
            return false
        }
    }

  static compareItems(item1, item2){
        if(item1.price < item2.price){
            return item1
        }else{
            return item2
        }
    }

    static sumItems(...items){
     return  items.reduce((acc, curr) => acc + curr.price , 0)
    }
}


module.exports = StoreItem
