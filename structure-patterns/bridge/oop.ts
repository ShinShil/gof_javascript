class Shape {
    constructor(public color: Color) {

    }
}

class Square extends Shape {
    log() {
        console.log('Square');
        this.color.log();
    }
}

class Recatnagle extends Shape {
    log() {
        console.log('Rectangle');
        this.color.log();
    }
}

abstract class Color {
    abstract log();
}

class BlueColor extends Color {
    log() {
        console.log('Blue');
    }
}

class BlackColor extends Color {
    log() {
        console.log('Black');
    }
}

const blueSquare = new Square(new BlueColor());
const blackSquare = new Square(new BlackColor());
blueSquare.log();
blackSquare.log();