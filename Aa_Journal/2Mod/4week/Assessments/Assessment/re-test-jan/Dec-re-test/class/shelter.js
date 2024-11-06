class Shelter{
    constructor(){
        this.pets = [];
    };



    addPet(pet){
        if(pet.isAdoptable()){
        this.pets.push(pet)
        }else{
            throw new Error
        }
    }
    static bulkAddPets(shelter, ...pets) {
        pets.forEach((pet) => shelter.addPet(pet));
    }

    // static bulkAddPets(...pet){
    //     console.log(pet);
    //     for (let i = 1; i < pet.length; i++) {
    //         pet[0].pets.push(pet[i])
    //      }
    // }

    printTweet(){
     let tweet = `Today we have ${this.pets.length} pets up for adoption: `
     this.pets.forEach((pet,i) =>{
        if(i >= this.pets.length-1){
            tweet += `${pet.name} (${pet.petType.toLowerCase()})`
            }else{
            tweet += `${pet.name} (${pet.petType.toLowerCase()}), `
            }
     } )
     return tweet
    }

   static searchFor(shelter, Type){
        console.log(shelter);
        return shelter.pets.filter(pet => pet.petType === Type)
    }

     doAdoption(fosterFamily, pet){
        fosterFamily.addPet(pet)
        if(this.pets.includes(pet)){
            this.pets.splice(this.pets.indexOf(pet), 1)
            fosterFamily.adoptionExpenses += 25
         }
    }
    
}

module.exports = Shelter
