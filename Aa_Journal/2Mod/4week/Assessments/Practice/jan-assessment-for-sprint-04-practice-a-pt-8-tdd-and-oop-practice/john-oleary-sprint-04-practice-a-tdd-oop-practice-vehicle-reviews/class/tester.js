const Bicycle = require("./bicycle");
const ElectricBicycle = require("./electric-bicycle");
const Reviews = require("./review");


class Tester{
    constructor(name, reviews = []){
        this.name = name;
        this.reviews = reviews;
    }

    submitReview(vehicle, stars, text){
        if(!vehicle.validate()) throw new Error("Cannot submit review for invalid vehicle.")
        if(vehicle instanceof Bicycle) this.bikeTester = true;
        if(vehicle instanceof ElectricBicycle) this.eBikeTester = true;
       let newRev = new Reviews(vehicle, this, stars, text)
       newRev.addReview()
       return newRev
    }
}


module.exports = Tester
