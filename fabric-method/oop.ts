interface ITransport {
    deliver(): void;
}

class EarthTransport implements ITransport {
    public deliver() {
        console.log('Deliver on the earth')
    }
}

class SpaceTransport implements ITransport {
    public deliver() {
        console.log('Deliver on the space');
    }
}

abstract class BaseDeliverSystem {
    public abstract createTransport(): ITransport;

    public deliver() {
        console.log('Prepare deliver process');
        const transport = this.createTransport();
        transport.deliver();
        console.log('Deliver process has been finished');
        console.log('=================');
    }
}

class SpaceDeliverSystem extends BaseDeliverSystem{
    public createTransport(): ITransport {
        return new SpaceTransport();
    }
}

class EarthDeliverSystem extends BaseDeliverSystem {
    public createTransport(): ITransport {
        return new EarthTransport();
    }
}

let deliverSystem = new SpaceDeliverSystem();
deliverSystem.deliver();
deliverSystem = new EarthDeliverSystem();
deliverSystem.deliver();