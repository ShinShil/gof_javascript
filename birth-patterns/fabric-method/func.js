function AbstractDeliverSystem() {
    this.deliver = function () {
        console.log('Prepare for deilver');
        var transport = this.createTransport();
        transport.deliver();
        console.log('Ready');
        console.log('================');
    }
}

function EarthDeliverSystem() {
    AbstractDeliverSystem.call(this);

    this.createTransport = function () {
        return new EarthTransport();
    }
}

function Transport() {
    this.log = function (message) {
        console.log(message + ' - from transport object')
    }
}

function EarthTransport() {
    Transport.call(this);
    var DELIVER_MESSAGE = 'Deliver on the earth';
    this.deliver = function () { this.log(DELIVER_MESSAGE); }
}

function SpaceDeliverSystem() {
    AbstractDeliverSystem.call(this);
    this.createTransport = function () {
        return new function () {
            Transport.call(this); // take log function
            this.deliver = function () {
                this.log('Deliver on the space');
            }
        };
    }
}

var deliverSystem = new EarthDeliverSystem();
deliverSystem.deliver();
deliverSystem = new SpaceDeliverSystem();
deliverSystem.deliver(); 