

class Vehicle{
    constructor(modelName, year, price){
        this.modelName = modelName
        this.year = year
        this.price = price
        this.reviews = []
    }
    validate(){
if(!this.modelName || !this.year || !this.price) return false
if(1950 > this.year || this.year > 2100) return false
    return true
 };

 update(newModel, newYear, newPrice){
    if(1950 > newYear || newYear > 2100) throw new Error("Year must be between 1950 and 2100")
    if(newPrice <= 0) throw new Error("Price must be greater than 0")
    this.modelName = newModel;
    this.year = newYear;
    this.price =newPrice;
 }

 printDetails(){
    return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`
 }
 findReviewByTester(name){
    return this.reviews.find(review => review.tester.name === name)
 }
}
module.exports = Vehicle;
