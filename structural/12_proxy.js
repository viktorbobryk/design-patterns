// Замісник — це структурний патерн, що дає змогу підставляти замість реальних об’єктів спеціальні об’єкти-замінники.
//            Ці об’єкти перехоплюють виклики до оригінального об’єкта, дозволяючи зробити щось до чи після передачі виклику оригіналові.

class CarAccess {
    open() {
        console.log('Opening car door')
    }

    close() {
        console.log('Closing the car door')
    }
}

//proxy
class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('Access denied!');
        }
    }

    authenticate(password) {
        return password === 'Elon Musk';
    }

    close() {
        this.door.close()
    }
}

const door = new SecuritySystem(new CarAccess());
door.open('Vasya Pupkin');
door.open('Elon Musk');
door.close();
