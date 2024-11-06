
class Reviews{
    constructor(vehicle, tester, starRating, text){
        this.vehicle = vehicle;
        this.tester = tester;
        this.starRating = starRating;
        this.text = text
    }
    addReview(){
       this.vehicle.reviews.push(this)
       this.tester.reviews.push(this)
        }

       static filterByStars(num,...rev){
            return rev.filter(el => el.starRating === num)
        }
}


module.exports = Reviews
