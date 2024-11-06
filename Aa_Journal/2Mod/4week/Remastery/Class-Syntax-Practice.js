class Computer{
    constructor(brand, OS, type){
        this.brand = brand
        this.OS = OS
        this.type = type
    }
    powerOn(){
        console.log(`${this.brand} ${this.type} powers on with ${this.OS}`)
    }

    static otherPower (...computers){
         return computers.forEach( (computer) => {powerOn(computer)

         });
    }
}

const myComputer = new Computer(
'Asus',
'windows',
'laptop'
);


const yourComputer = new Computer(
'apple',
'mac',
'desktop'
  )
