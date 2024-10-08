// Шаблонний метод — це поведінковий патерн проектування, який визначає кістяк алгоритму,
// перекладаючи відповідальність за деякі його кроки на підкласи. Патерн дозволяє підкласам перевизначати кроки алгоритму,
// не змінюючи його загальної структури.

class BuilderTemplate {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
}

class TeslaBuilder extends BuilderTemplate {
    addEngine() {
        console.log('Add Electronic Engine');
    }

    installChassis() {
        console.log('Install Tesla chassis');
    }

    addElectronic() {
        console.log('Add special electronic');
    }

    collectAccessories() {
        console.log('Collect Accessories');
    }
}

class BmwBuilder extends BuilderTemplate {
    addEngine() {
        console.log('Add Diesel Engine');
    }

    installChassis() {
        console.log('Install BMW chassis');
    }

    addElectronic() {
        console.log('Add electronic');
    }

    collectAccessories() {
        console.log('Collect Accessories');
    }
}

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build();
bmwBuilder.build();
