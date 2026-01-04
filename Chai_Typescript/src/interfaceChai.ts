interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;
}

const masala: Chai = {
    flavour: "Masala",
    price: 20
}

interface Shop {
    readonly id: number;
    name: string;
}

const s: Shop = {
    id: 1,
    name: "Chaicode Point"
}
// s.is = 2 // Error: Cannot assign to 'id' because it is a read-only property.


//.............

interface DiscountCalculator {
    (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5

interface TeaMachine {
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start() {
        console.log("Tea machine started");
    },
    stop() {
        console.log("Tea machine stopped");
    }
}

// index signature

interface ChaiRatings {
    [flavour: string]: number;
}

const ratings: ChaiRatings = {
    Masala: 4.5,
    Ginger: 4.0,
    Elaichi: 5.0
}

interface User {
    name:string
}

interface User {
    age:number
}

const u:User = { 
    name:"Himanshu",
    age:25
}

interface A {a: string}
interface B {b: number}

interface C extends A, B {c: boolean}
