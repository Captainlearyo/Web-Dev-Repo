
class Pet{
    constructor(name, petType){
        this.name = name;
        this.petType = petType;
    }

    isAdoptable(){
        if(this.name){
        if(this.petType === 'Cat' || this.petType === 'Dog' || this.petType === 'Mouse' || this.petType === 'Chicken' || this.petType === 'Rabbit'){
            return true
         }
        }
            return false
    }
}


module.exports = Pet
