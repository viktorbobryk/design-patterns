// Ітератор — це поведінковий патерн, що дає змогу послідовно обходити елементи складових об’єктів, не розкриваючи їхньої внутрішньої організації.

class ArrayIterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}

class ObjectIterator {
    constructor(el) {
        this.index = 0;
        this.keys = Object.keys(el),
            this.elements = el;
    }

    next() {
        return this.elements[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
}

//array
const autos = ['Audi', 'BMW', 'Tesla', 'Mercedes'];
const collection = new ArrayIterator(autos);

while(collection.hasNext()){
    console.log(collection.next());
}

//object
const autos2 = {
    audi: {model: 'Audi', color: 'black', price: '2000'},
    bmw: {model: 'BMW', color: 'white', price: '3000'},
    tesla: {model: 'Tesla', color: 'gray', price: '4000'},
}

const collection2 = new ObjectIterator(autos2);
while(collection2.hasNext()){
    console.log(collection2.next())
}
