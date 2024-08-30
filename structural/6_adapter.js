// Адаптер — це структурний патерн, що дає змогу об’єктам із несумісними інтерфейсами працювати разом.

class usCar {
    showMileage(m) {
        console.log(`${m} miles`)
    }
}

class euroCar {
    showKilometrage(k) {
        console.log(`${k} kilometers`)
    }
}

class adapterFromEuToUs {
    constructor(car) {
        this.car = new usCar();
    }
    showMileage(m) {this.car.showMileage(m * 1.8)}
}

const usa = new usCar();
usa.showMileage(100);

const euro = new euroCar();
euro.showKilometrage(100);

const adapter = new adapterFromEuToUs();
adapter.showMileage(100);