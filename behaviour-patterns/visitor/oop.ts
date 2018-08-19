interface IVisitor {
    doForCity(city: City): void;
    doForHouse(house: House): void;
    doForStreet(street: Street): void;
}

interface IVisitable {
    accept(visitor: IVisitor): void;
}

class Visitor implements IVisitor {
    doForCity(city: City): void {
        console.log('[visitor] can work with city');
    }
    doForHouse(house: House): void {
        console.log('[visitor] can work with house');
    }
    doForStreet(street: Street): void {
        console.log('[visitor] can work with street');
    }


}

class House implements IVisitable {
    accept(visitor: IVisitor): void {
        visitor.doForHouse(this);
    }
}

class City implements IVisitable {
    accept(visitor: IVisitor): void {
        visitor.doForCity(this);
    }
}

class Street implements IVisitable {
    accept(visitor: IVisitor): void {
        visitor.doForStreet(this);
    }
}

const targetsForVisit = [new House(), new Street(), new City()];
const visitor = new Visitor();
targetsForVisit.forEach(target => target.accept(visitor));