class Wheels{
    constructor(tire, spokes, rim, tube){
        this.tire = tire;
        this.spokes = spokes;
        this.rim = rim;
        this.tube = tube;
    }
}

class Frame{
    constructor(size, material, shape){
        this.size = size;
        this. material = material;
        this.shape = shape;
    }
}

class Accessories{
    constructor(brakes, bell, reflectors){
        this.brakes = brakes;
        this.bell = bell;
        this.reflectors = reflectors;
    }
}


module.exports = Wheels, Frame, Accessories ;
