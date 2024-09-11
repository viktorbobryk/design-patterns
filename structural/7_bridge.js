// Міст — це структурний патерн, який розділяє один або кілька класів на дві окремі ієрархії — абстракцію та реалізацію,
//        дозволяючи змінювати код в одній гілці класів, незалежно від іншої.

class Model {
    constructor(color) {
        this.color = color;
    }
}

//bridge
class Color {
    constructor(type) {
        this.type = type;
    }
    get() {
        return this.type;
    }
}

//realzation
class BlackColor extends Color {
    constructor() {
        super("black");
    }
}

//realzation
class RedColor extends Color {
    constructor() {
        super("red");
    }
}

//abstraction
class Audi extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Audi, Color: ${this.color.get()}`;
    }
}

//abstraction
class Bmw extends Model {
    constructor(color) {
        super(color);
    }

    paint() {
        return `Auto: Bmw, Color: ${this.color.get()}`;
    }
}

// we avoided creation of very specific class:
// const blackBmw = new BlackColorBmw();

// Instead
const blackBmw = new Bmw(new BlackColor());
const redBmw = new Bmw(new RedColor());
const blackAudi = new Audi(new BlackColor());
const redAudi = new Audi(new RedColor());

console.log(blackBmw.paint());
console.log(redBmw.paint());
console.log(blackAudi.paint());
console.log(redAudi.paint());
