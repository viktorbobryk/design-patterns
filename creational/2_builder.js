// Будівельник — це породжувальний патерн, що дає змогу створювати складні об’єкти крок за кроком.
// Дає можливість використовувати один і той самий код будівництва для отримання різних відображень об’єктів.
// Може містить додатковий рівень абстракції що управляє кількома будувельниками.

class Car {

    constructor() {
        this.autoPilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot(autoPilot) {
        this.car.autoPilot = autoPilot;
        return this;
    }

    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }

    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}

const muscleCar = new CarBuilder()
    .addAutoPilot(true)
    .addParktronic(true)
    .updateEngine('V12')
    .build();

const smallCar = new CarBuilder()
    .addSignaling(true)
    .updateEngine('0.5l')
    .build()

console.log('muscleCar ', muscleCar);
console.log(' smallCar ',  smallCar);


