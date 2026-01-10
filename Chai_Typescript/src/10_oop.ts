// OOP: Object Oriented Programming
// It is a programming paradigm that uses "objects" to design software.
// Parts of OOP:
// 1. Class
// 2. Object
// 3. Inheritance
// 4. Polymorphism
// 5. Abstraction
// 6. Encapsulation


// step-1...........
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



// step-2...........
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



//................Access Modifiers : Public, Private, Protected.............

class ChaiHai {
    public flavour: string = "Masala";
    private secretIngredents = "Ginger";

    reveal() {
        return this.secretIngredents; // ok
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



// .............private field.............
class Walet {
    #balance = 100

    getBalance() {
        return this.#balance;
    }
}
const w = new Walet()



//................readonly property.............
// readonly properties can only be assigned during declaration or in the constructor.
// It cannot be modified afterwards.

class Cup {
    readonly capacity: Number = 250
    constructor(capacity: Number) {
        this.capacity = capacity // Error: Cannot reassign to 'capacity' because it is a read-only property.
    }
}



// .............getter and setter.............
//  Getter and Setter are special methods that provide controlled access to the properties of an object.
// They allow you to define custom logic for getting and setting property values.
//  This helps in encapsulating the internal representation of the property and allows for validation or transformation of data.
//  Getters are used to retrieve the value of a property, while Setters are used to set or update the value of a property.
// They are defined using the get and set keywords respectively.
// Getter and Setter methods are accessed like regular properties, without the need to call them as functions.

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
// Static properties and methods belong to the class itself rather than to any specific instance of the class.
// They can be accessed without creating an instance of the class.

class EkChai {
    static shopName = "Chaicode caffe"

    constructor(public flavour: string) { }

}
console.log(EkChai.shopName);



// ..........abstract class and method.............
// Abstract classes are classes that cannot be instantiated directly.
// They are meant to be subclassed and provide a common interface for their subclasses.
// Abstract classes can contain abstract methods, which are methods that are declared but not implemented in the abstract class.

abstract class Drink {
    abstract prepare(): void;
}

class MyChai extends Drink {
    prepare() {
        console.log("Preparing chai");
    }
}



// ..........composition over inheritence.............
// Composition is a design principle that suggests that classes should achieve polymorphic behavior and 
// -code reuse by containing instances of other classes that implement the desired functionality, rather than inheriting from a base or parent class.

class Heater {
    heat() { }
}

class Chaimaker {
    constructor(private heater: Heater) { }

    make() {
        this.heater.heat()
    }
}