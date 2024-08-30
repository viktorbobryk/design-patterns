// Фасад — це структурний патерн, який надає простий інтерфейс до складної системи класів, бібліотеки або фреймворку.

class Conveyor {

    setBody() {
        console.log('Body set!');
    }

    getEngine() {
        console.log('Dismantle Engine!');
    }

    setEngine() {
        console.log('Engine set!');
    }

    setInterior() {
        console.log('Interior added!');
    }

    getInterior() {
        console.log('Dismantle interior!');
    }

    setExterior() {
        console.log('Added interior!');
    }

    setWheels() {
        console.log('Wheels!');
    }

    addElectronics() {
        console.log('Added electronics!');
    }

    paint() {
        console.log('Car painted!');
    }
}

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }

    assembleCar() {
        this.car.setBody();
        this.car.setEngine();
        this.car.setInterior();
        this.car.setExterior();
        this.car.setWheels();
        this.car.addElectronics();
        this.car.paint();
    }
    changeEngine() {
        this.car.getEngine();
        this.car.setEngine();
    }
    changeInterior() {
        this.car.getInterior();
        this.car.setInterior();
    }
}

const conveyor = new ConveyorFacade(new Conveyor());
let car = conveyor.assembleCar();

//if engine and interior were defected, and we want to fix them
conveyor.changeEngine();
conveyor.changeInterior();

console.log(car);


