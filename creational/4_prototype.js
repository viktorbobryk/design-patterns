// Прототип — це породжувальний патерн, що дає змогу копіювати об’єкти, не вдаючись у подробиці їхньої реалізації.

class TeslaCar {

    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    //basic class implementation /clone
    clone() {
        return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
    }
}

//Produce base auto
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

//Cloning of base auto
const car1 = prototypeCar.clone();
const car2 = prototypeCar.clone();
const car3 = prototypeCar.clone();

//changes for particular auto
car1.interior = 'white';
car1.autopilot = true;

console.log('car1', car1);
console.log('car2', car2);