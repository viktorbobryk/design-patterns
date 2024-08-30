// Відвідувач — це поведінковий патерн проектування, що дає змогу додавати до програми нові операції, не змінюючи класи об’єктів,
//              над якими ці операції можуть виконуватися.

class Auto {
    accept(visitor) {
        visitor(this);
    }
}

class Tesla extends Auto {
    info() {
        return 'It is a Tesla car!';
    }
}

class Bmw extends Auto {
    info() {
        return 'It is a BMW car!';
    }
}

class Audi extends Auto {
    info() {
        return 'It is an Audi car!';
    }
}

const exportVisitor = (auto) => {
    if (auto instanceof Tesla)
        auto.export = console.log(`Exported data: ${auto.info()}`);
    if (auto instanceof Bmw)
        auto.export = console.log(`Exported data: ${auto.info()}`);
    if (auto instanceof Audi)
        auto.export = console.log(`Exported data: ${auto.info()}`);
}

const tesla = new Tesla();
const bmw = new Bmw();

tesla.accept(exportVisitor);
bmw.accept(exportVisitor);
