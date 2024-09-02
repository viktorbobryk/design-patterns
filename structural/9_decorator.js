// Декоратор — це структурний патерн, що дає змогу динамічно додавати об’єктам нову функціональність(властивості і методи), загортаючи їх у корисні «обгортки».
// HOC, Pure Component, ErrorBoundary(static getDerivedStateFromError/ componentDidCatch)
// Ціль не створить, а змінювать існуючі класи.

class Mercedes {

    constructor() {
        this.price = 50000;
        this.model = 'Car'
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.model
    }
}

class Brabus extends class Mercedes {
 {

    constructor() {
        super();
        this.price = 100000;
        this.model = 'Brabus';
    }
}

class AMG extends class Mercedes {
 {

    constructor() {
        super();
        this.price = 90000;
        this.model = 'AMG';
    }
}

class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 10000;
    }

    getDescription() {
        return `${this.car.getDescription()} with autopilot`;
    }
}

class Armor {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 30000;
    }

    getDescription() {
        return `${this.car.getDescription()} with armor`;
    }
}

// //version with autopilot and armor
let brabus = new Brabus();
brabus = new Autopilot(brabus);
brabus = new Armor(brabus);

//version with autopilot only
let amg = new AMG();
amg = new Armor(amg);

console.log(brabus.getPrice(), brabus.getDescription());
console.log(amg.getPrice(), amg.getDescription());
