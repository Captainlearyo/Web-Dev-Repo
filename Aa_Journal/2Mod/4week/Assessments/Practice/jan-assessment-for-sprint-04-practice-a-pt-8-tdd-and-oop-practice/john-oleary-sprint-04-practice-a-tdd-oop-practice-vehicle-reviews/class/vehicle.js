
class Vehicle{
    constructor(modelName, year, price ){
        this.modelName = modelName;
        this.year = year;
        this.price = price
        this.reviews = []
    }
    validate(){
        if(this.modelName && this.price && (1950 < this.year) && (this.year < 2100)){
            return true
        }else{
            return false
        }
    }

    update(newModelName, newYear, newPrice){
        if(newYear < 1950 || newYear > 2100) throw new Error('Year must be between 1950 and 2100');
        if(newPrice <= 0) throw new Error("Price must be greater than 0")
        this.modelName = newModelName;
        this.year = newYear;
        this.price = newPrice
    }

    printDetails(){
        return (`The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`);
    }

    findReviewByTester(name){
        return this.reviews.find(review => review.tester.name == name);
    }
}

module.exports = Vehicle
