const Pet = require("./pet");

class FosterFamily{
    constructor(lastName, capacity, currentPets, pastPets){
        this.lastName = lastName;
        this.capacity = capacity;
        this.currentPets = [];
        this.pastPets = []
    }
    addPet(...pets){
        for (let i = 0; i < pets.length; i++) {
            if(this.currentPets.length < this.capacity){
                this.currentPets.push(pets[i])
            }else{
                throw new Error
            }
        }
    return this.currentPets
    }

    removePet(petObj){
         let i = this.currentPets.indexOf(this.currentPets.find(pet => pet.name === petObj.name))
        if(i === -1) throw new Error
        this.currentPets.splice(i,1)
    }
}


module.exports = FosterFamily
