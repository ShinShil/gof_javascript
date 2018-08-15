var AbstractDeliverSystem = {
    deliver: function() {
        console.log('Prepare delivering...')
        const transport = this.createTransport();
        transport.deliver();
        console.log('Task is completed');
        console.log('================');
    }
};

var EarthDeliverSystem = {
    createTransport: function() {
        return {
            deliver: function() { console.log('Deliver on the Earth')}
        }
    }
}

var SpaceDeliverSystem = {
    createTransport: function() {
        return {
            deliver: function() { console.log('Deliver in the space with help of rocket')}
        }
    }
}

EarthDeliverSystem.__proto__ = AbstractDeliverSystem;
SpaceDeliverSystem.__proto__ = AbstractDeliverSystem;

EarthDeliverSystem.deliver();
SpaceDeliverSystem.deliver();