// Декоратор — це структурний патерн, що дає змогу динамічно додавати об’єктам нову функціональність(властивості і методи), загортаючи їх у корисні «обгортки».
// HOC, Pure Component, ErrorBoundary(static getDerivedStateFromError/ componentDidCatch)
// Ціль не створить, а змінювать існуючі класи.

class Car {

    constructor() {
        this.price = 10000;
        this.model = 'Car'
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.model
    }
}

class Tesla extends Car {

    constructor() {
        super();
        this.price = 100000;
        this.model = 'Tesla';
    }
}

class Audi extends Car {

    constructor() {
        super();
        this.price = 50000;
        this.model = 'Audi';
    }
}

class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 5000;
    }

    getDescription() {
        return `${this.car.getDescription()} with autopilot`;
    }
}

class Parctronic {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    getDescription() {
        return `${this.car.getDescription()} with parktronic`;
    }
}

// //version with autopilot and parktronic
let tesla = new Tesla();
tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);

//version with autopilot only
let audi = new Audi();
audi = new Parktronic(audi);

console.log(tesla.getPrice(), tesla.getDescription());
console.log(audi.getPrice(), audi.getDescription());
