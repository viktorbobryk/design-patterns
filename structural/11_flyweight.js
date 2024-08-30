// Легковаговик(кеш) — це структурний патерн, що дає змогу вмістити більшу кількість об’єктів у відведеній оперативній пам’яті.
//                     Легковаговик заощаджує пам’ять, розподіляючи спільний стан об’єктів між собою, замість зберігання однакових даних у кожному об’єкті.

//flyweight
class Auto {
    constructor(model) {
        this.model = model;
    }
}

class AutoFactory {
    constructor(name) {
        this.models = {};
    }

    create(name) {
        let model = this.models[name];
        if (model) return model;
        console.count('model')
        this.models[name] = new Auto(name);
        return this.models[name];
    }
    getModels() {
        console.table(this.models);
    }
}

const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla');
const redTesla = factory.create('Tesla');

console.log(factory.getModels());
