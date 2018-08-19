
var Car = function (size, color, secretValue) {
    this.size = size;
    this.color = color;

    this.getSecretValue = function () {
        return secretValue;
    }
}

Car.prototype.clone = function () {
    return new Car(this.size, this.color, this.getSecretValue());
}

Car.prototype.log = function () {
    console.log('Size - ' + this.size + ', Color - ' + this.color + ', Secret value - ' + this.getSecretValue());
}

var car = new Car(5, 'red', 'secret');
var car2 = car.clone();
var car3 = Object.assign(car);
car2.log();
console.log('=====================');
car3.log();
