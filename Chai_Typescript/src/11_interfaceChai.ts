// Interface : A contract to define the structure of an object
// It defines the properties and methods that an object must have.
// Interfaces are used to enforce type safety and ensure that objects adhere to a specific shape.
// It defines the structure and not generate the javaScript code.

interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;// optional property
}

const masala: Chai = {
    flavour: "Masala",
    price: 20
}

//..........readonly property...........
interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {
    id: 1,
    name: "Chaicode Point"
}
// s.is = 2 // Error: Cannot assign to 'id' because it is a read-only property.



// .............function type interface.......
interface DiscountCalculator {
    (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5



// .............method type interface.......
interface TeaMachine {
    start(): void;
    stop(): void;
}

// Example implementation of TeaMachine interface
const machine: TeaMachine = {
    start() {
        console.log("Tea machine started");
    },
    stop() {
        console.log("Tea machine stopped");
    }
}



//..............index signature............
// An index signature is used to define the type of keys and values in an object when
// -the exact property names are not known in advance.
// It allows you to specify the type of keys and the type of values that an object can have.

interface ChaiRatings {
    [flavour: string]: number;
}

const ratings: ChaiRatings = {
    Masala: 4.5,
    Ginger: 4.0,
    Elaichi: 5.0
}


//..............extending interface............
interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name: "Himanshu",
    age: 25
}


//..............extending multiple interface............
interface A { a: string }
interface B { b: number }

interface C extends A, B { c: boolean }
