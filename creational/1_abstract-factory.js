// Абстрактна фабрика — це породжувальний патерн, що дає змогу створювати сімейства пов’язаних об’єктів,
//                      не прив’язуючись до конкретних класів створюваних об’єктів. Інтерфейс для інших фабрик.

class CarProducer {
    constructor(model, price, maxSpeed, wheels) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.wheels = wheels;
    }
}

class SportFactory {
    create(type) {
        if (type === 'Z3') {
            return new CarProducer(type, 108000, 400, 4);
        } else if (type === 'M3') {
            return new CarProducer(type, 190000, 380, 4);
        }
    }
}

class OffRoadFactory {
    create(type) {
        if (type === 'X5') {
            return new CarProducer(type, 100000, 190, 4);
        } else if (type === 'X6') {
            return new CarProducer(type, 140000, 220, 4);
        }
    }
}

class BikeFactory {
    create(type) {
        if (type === 'M1000') {
            return new CarProducer(type, 50000, 400, 2);
        } else if (type === 'R1000') {
            return new CarProducer(type, 60000, 350, 2);
        }
    }
}

class AbstractFactory {
    constructor(type) {
        this.type = type;
    }

    getFactory() {
        if (this.type === 'sport') {
            return new SportFactory();
        } else if (this.type === 'offRoad') {
            return new OffRoadFactory();
        } else if (this.type === 'bike') {
            return new BikeFactory();
        }
    }
}

// produce families of related objects:
const sportFactory = new AbstractFactory('sport').getFactory();
const offRoadFactory = new AbstractFactory('offRoad').getFactory();
const bikeFactory = new AbstractFactory('bike').getFactory();

const z3 = sportFactory.create('Z3');
const x5 = offRoadFactory.create('X5');
const m1000 = bikeFactory.create('M1000');

console.log('z3    => ', z3);
console.log('x5    => ', x5);
console.log('m1000 => ', m1000);

