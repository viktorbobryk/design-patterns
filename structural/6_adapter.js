// Адаптер — це структурний патерн, що дає змогу об’єктам із несумісними інтерфейсами працювати разом.


class euroCar {
    showKilometrage(k) {
        console.log(`${k} kilometers`)
    }
}

class usCar {
    showMileage(m) {
        console.log(`${m} miles`)
    }
}

class adapterFromUsToEu {
    constructor(car) {
        this.car = new usCar();
    }
    showKilometrage(m) {this.car.showMileage(m * 1.8)}
}

const euro = new euroCar();
euro.showKilometrage(1000);

const usa = new usCar();
usa.showMileage(1000);

const adapter = new adapterFromUsToEu();
adapter.showKilometrage(1000);