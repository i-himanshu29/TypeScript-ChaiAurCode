// Arrays : Arrays are used to store multiple values in a single variable.

const chaiFlavours: string[] = ["Masala", "Ginger", "Elaichi"];
const chaiPrice: number[] = [20, 25, 30];

const ratings: Array<number> = [4.5, 4.0, 3.5, 5.0];
type Chai = {
    type: string,
    price: number
}

const menu: Chai[] = [
    { type: "Masala", price: 20 },
    { type: "Ginger", price: 25 },
    { type: "Elaichi", price: 30 }
]

const cities: readonly string[] = ["Delhi", "Mumbai", "Chennai"]
// cities.push("Kolkata") // Error: Property 'push' does not exist on type 'readonly string[]'.
// cities[0]="New Delhi" // Error: Index signature in type 'readonly string[]' only permits reading.

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Tuples: Tuples are a special type of array that allows you to store multiple values of different types in a single variable.

let chaiTuple: [string, number, boolean];
chaiTuple = ["Masala", 20, true];
// chaiTuple = [20,"masala",true] // Error: Type 'number' is not assignable to type 'string'.

let userInfo: [string, number, boolean?]
userInfo = ["John", 30]
userInfo = ["Jane", 25, true]

const location: readonly [number, number] = [28.6139, 77.2090]

const chaiItems: [name: string, price: number] = ["Ginger Chai", 25]

// Enums : Enums are a way to define a set of named constants.

enum ChaiSize {
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE"
}

// or 

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}


const size = CupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, //101
    CANCELLED //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
    ELAICHI = "elaichi"
}

function makeChai(type: ChaiType) {
    console.log(`Making a cup of ${type} chai.`);
}
makeChai(ChaiType.ELAICHI);
// makeChai("masala");// masala is not assignable to parameter of type 'ChaiType'

enum RandomEnum {
    ID = 1,
    NAME = "Chai",
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.HIGH;

let t: [String, number] = ["Test", 123];
t.push("extra"); // This is allowed