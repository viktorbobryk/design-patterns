// Ланцюжок обов’язків — це поведінковий патерн, що дає змогу передавати запити послідовно ланцюжком обробників.
//                       Кожен наступний обробник вирішує, чи може він обробити запит сам і чи варто передавати запит далі ланцюжком.

class Account {
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log(`Paid ${orderPrice} using ${this.name}`);
        } else if (this.incomer) {
            console.log(`Cannot pay using ${this.name}`);
            this.incomer.pay(orderPrice)
        } else {
            console.log('Unfortunately, not enough money');
        }
    }

    canPay(amount) {
        return this.balance >= amount;
    }

    setNext(account) {
        this.incomer = account;
    }

    showChain() {
        console.log(this);
    }
}

class Master extends Account {
    constructor(balance) {
        super();
        this.name = 'Master Card';
        this.balance = balance;
    }
}

class Visa extends Account {
    constructor(balance) {
        super();
        this.name = 'Visa';
        this.balance = balance;
    }
}

class Paypal extends Account {
    constructor(balance) {
        super();
        this.name = 'Paypal';
        this.balance = balance;
    }
}

//Set balance
const master = new Master(100);
const visa = new Visa(200);
const paypal = new Paypal(500);

//define chain
master.setNext(visa);
visa.setNext(paypal);

master.pay(438);

master.showChain();
