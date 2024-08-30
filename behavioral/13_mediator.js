// Посередник — це поведінковий патерн, що дає змогу зменшити зв’язаність великої кількості класів між собою,
//              завдяки переміщенню цих зв’язків до одного класу-посередника.

class OfficialDealer {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();
        console.log(`Order name: ${name}. Ordered auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        console.log('Paid auto insurance: 1000$.')
        this.addToCustomersList(name);
    }

    addToCustomersList(name) {
        this.customers.push(name);
    }

    getCustomerList() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info)
    }
}

const mediator = new OfficialDealer();

const biden = new Customer('Joe Biden', mediator);
const trump = new Customer('Donald Trump', mediator);

biden.makeOrder('Ford', 'With condition');
trump.makeOrder('Tesla', 'With autopilot');

console.log(mediator.getCustomerList())
