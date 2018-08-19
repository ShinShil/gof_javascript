interface IBuilder<T> {
    setSeats(amount: number);
    setEngine(name: string);
    getResult(): T;
    reset();
}

class Car {
    seatsAmount: number;
    engineType: string;

    print() {
        console.log(`Seats - ${this.seatsAmount}, engine - ${this.engineType}`);
    }
}

class Manual {
    seatsAmount: number;
    engineInstruction: string;
    printInstructions(): void {
        if (this.engineInstruction) {
            console.log(`This is car has ${this.seatsAmount} seats`);
            console.log(this.engineInstruction);
        } else {
            console.log('This complecatation has no engine');
        }
    }
}

class CarComplecation {
    constructor(private name: string, private car: Car, private manual: Manual) {

    }

    log() {
        console.log(this.name);
        this.car.print();
        this.manual.printInstructions();
    }
}

class CarBuilder implements IBuilder<Car> {
    constructor(private car: Car = new Car()) { }

    reset() {
        this.car = new Car();
        this.car.seatsAmount = 0;
        this.car.engineType = '';
    }

    setSeats(amount: number) {
        this.car.seatsAmount = amount;
    }

    setEngine(engine: string) {
        this.car.engineType = engine;
    }

    getResult(): Car {
        return this.car;
    }
}

class ManualBuilder implements IBuilder<Manual> {
    constructor(private manual = new Manual()) {

    }

    reset() {
        this.manual = new Manual();
        this.manual.seatsAmount = 0;
        this.manual.engineInstruction = null;
    }

    setEngine(engineType: string) {
        this.manual.engineInstruction = `The type of engine: ${engineType},  to use this you should buy and install it`;
    }

    setSeats(seatsAmount: number) {
        this.manual.seatsAmount = seatsAmount;
    }

    getResult(): Manual {
        return this.manual;
    }
}

class Director {
    constructor(public builder: IBuilder<any>) {

    }

    public buildSport() {
        this.builder.reset();
        this.builder.setSeats(4);
        this.builder.setEngine('"Sport Engine"');
        return this.builder.getResult();
    }

    public buildMotorbike() {
        this.builder.reset();
        this.builder.setSeats(2);
        this.builder.setEngine('"MotorBike Engine"');
        return this.builder.getResult();
    }

    public buildBike() {
        this.builder.reset();
        return this.builder.getResult();
    }
}

const carBuilder = new CarBuilder();
const manualBuilder = new ManualBuilder();
const director =  new Director(carBuilder);
console.log('Car builder');
const sportCar = director.buildSport();
const bike = director.buildBike();
const motorBike = director.buildMotorbike();
director.builder = manualBuilder;
const sportManual = director.buildSport();
const bikeManual = director.buildBike();
const motorBikeManual = director.buildMotorbike();
const sportComplecation = new CarComplecation('Sport car', sportCar, sportManual);
const bikeComplecation = new CarComplecation('Bike', bike, bikeManual);
const motorBikeComplecation = new CarComplecation('Motorbike', motorBike, motorBikeManual);
sportComplecation.log();
bikeComplecation.log();
motorBikeComplecation.log();