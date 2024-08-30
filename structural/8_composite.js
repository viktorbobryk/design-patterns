// Компонувальник(дерево) — це структурний патерн, що дає змогу згрупувати декілька об’єктів у деревоподібну структуру,
//                          а потім працювати з нею так, ніби це одиничний об’єкт.

class Equipment {
    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

class Engine extends Equipment {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(800);
    }
}

class Body extends Equipment {
    constructor() {
        super();
        this.setName('Body');
        this.setPrice(3000);
    }
}

class Transmission extends Equipment {
    constructor() {
        super();
        this.setName('Transmission');
        this.setPrice(4000);
    }
}

class Composite extends Equipment {
    constructor() {
        super();
        this.equipments = [];
    }

    add(equipment) {
        this.equipments.push(equipment);
    }

    getPrice() {
        return this.equipments
            .map(equipment => equipment.getPrice())
            .reduce((a, b) => a + b);
    }
}

class Car extends Composite {
    constructor() {
        super();
        this.setName('Audi');
    }
}

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Transmission());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}`);
