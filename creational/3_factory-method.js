//Фабричний метод — це породжувальний патерн, який визначає загальний інтерфейс для створення об’єктів у суперкласі,
// дозволяючи підкласам змінювати тип створюваних об’єктів.

//кореневий, абстрактрий суперклас конструктор
class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

//клас який визиває конструктор з певними параметрами
class BmwFactory {
    create(type) {
        if (type === 'x5')
            return new Bmw(type, 108000, 300);
        else if (type === 'x6')
            return new Bmw(type, 111000, 320);
    }
}

const factory = new BmwFactory();

const x5 = factory.create('x5');
const x6 = factory.create('x6');

console.log('x5', x5);
console.log('x6', x6);
