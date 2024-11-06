const Pet = require("./pet")

class Shelter{
    constructor(){
    this.pets = [];
    };

   addPet(adoptablePet){
    if(pet.isAdoptable()){
    this.pets.push(adoptablePet)
    }else{
        throw new Error
    }

        }



   static bulkAddPets(...pet){
    for (let i = 1; i <= pet.length; i++) {
        this.pets.push(pet[i])
     }
    }

}


module.exports = Shelter
