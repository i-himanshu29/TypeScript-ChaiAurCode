// class Chai {
//     flavour: string;
//     price: number;

//     constructor() {
//         this.flavour = "Ginger";
//         this.price = 20;
//     }
// }
// const masalaChai = new Chai()
// masalaChai.flavour = "Masala"


// class Chai {
//     flavour: string;
//     price: number;

//     constructor(flavour:string,price:number) {
//         this.flavour = flavour;
//         this.price = price;
//     }
// }
// const masalaChai = new Chai() // Error: Expected 2 arguments, but got 0.
// masalaChai.flavour = "Masala"

// step-3...........
class Chai {
    flavour: string;

    // constructor(flavour:string,price:number) {
    //     this.flavour = flavour;
    //     this.price = price;
    // }

    constructor(flavour: string) {
        this.flavour = flavour;
        console.log(this);
    }
}
const masalaChai = new Chai("Ginger")
masalaChai.flavour = "Masala"

// Access Modifiers : Public, Private, Protected

class ChaiHai {
    public flavour: string = "Masala";
    private secretIngredents = "Ginger";

    reveal() {
        return this.secretIngredents;
    }

}

// const c = new ChaiHai() // Error: Property 'secretIngredents' is private and only accessible within class 'ChaiHai'.



//.............Protected................
class Shop {
    protected shopName = "Chai Point";
}

class Branch extends Shop {
    getShopName() {
        return this.shopName; // ok
    }
}

new Branch().getShopName(); // ok


class Walet {
    #balance = 100

    getBalance() {
        return this.#balance;
    }
}
const w = new Walet()

// readonly property

class Cup {
    readonly capacity: Number = 250
    constructor(capacity: Number) {
        this.capacity = capacity // Error: Cannot reassign to 'capacity' because it is a read-only property.
    }
}

class ModernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar;
    }

    set sugar(value: number) {
        if (value < 0 || value > 5) {
            console.log("Invalid sugar level")
        } else {
            this._sugar = value;
        }
    }
}

const c = new ModernChai()
console.log(c.sugar);
c.sugar = 4


// .............static property and method............

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string) { }

}

console.log(EkChai.shopName);

abstract class Drink {
    abstract prepare(): void;
}

class MyChai extends Drink {
    prepare() {
        console.log("Preparing chai");
    }
}


// ..........composition over inheritence.............
class Heater {
    heat() { }
}

class Chaimaker {
    constructor(private heater: Heater) { }

    make() {
        this.heater.heat()
    }
}