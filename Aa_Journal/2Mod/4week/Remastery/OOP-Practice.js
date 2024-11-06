class Animal{
    constructor(color, size){
        this.color = color
        this.size = size

    }
    thisIsAnInstenceMethod() {
        return console.log(`this Is An Instence Method ${this.color}`)
    }
    static thisIsAStaticMethod(){

        return this.thisIsAnInstenceMethod
    }
}

class Dog extends Animal{
    constructor(tail, nose){
        this.tail = tail;
        this.nose = nose;

    }
   cb = () => thisIsAnInstenceMethod()

   dogInstance(){
    console.log('dog')
   }
}

class Cat extends Animal{
    constructor(fur, ears){
        this.fur = fur;
        this.ears = ears

    }

   print(){
   console.log( dogInstance())}
}
