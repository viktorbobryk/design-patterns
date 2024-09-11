// Стратегія — це поведінковий патерн, який визначає сімейство схожих алгоритмів і розміщує кожен з них у власному класі.
//             Після цього алгоритми можна заміняти один на інший прямо під час виконання програми.

//strategy
const baseStrategy = (amount) => {
    return amount;
}

//strategy
const premiumStrategy = (amount) => {
    return amount * 0.85;
}

//strategy
const platinumStrategy = (amount) =>  {
    return amount * 0.65;
}


//context
class AutoCard {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

const baseCustomer = new AutoCard(baseStrategy);
const premiumCustomer = new AutoCard(premiumStrategy);
const platinumCustomer = new AutoCard(platinumStrategy);

baseCustomer.setAmount(10000);
console.log(baseCustomer.checkout());

premiumCustomer.setAmount(10000);
console.log(premiumCustomer.checkout());

platinumCustomer.setAmount(10000);
console.log(platinumCustomer.checkout());