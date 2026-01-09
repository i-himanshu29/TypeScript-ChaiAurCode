// Arrays : Arrays are used to store multiple values in a single variable.

//............Basic Array Type..........
const chaiFlavours: string[] = ["Masala", "Ginger", "Elaichi"];
const chaiPrice: number[] = [20, 25, 30];


//..........Generic Array Type..............
const ratings: Array<number> = [4.5, 4.0, 3.5, 5.0];
type Chai = {
    type: string,
    price: number
}


//...........Array of Objects............
const menu: Chai[] = [
    { type: "Masala", price: 20 },
    { type: "Ginger", price: 25 },
    { type: "Elaichi", price: 30 }
]


//..........Readonly Arrays.................
const cities: readonly string[] = ["Delhi", "Mumbai", "Chennai"]
// cities.push("Kolkata") // Error: Property 'push' does not exist on type 'readonly string[]'.
// cities[0]="New Delhi" // Error: Index signature in type 'readonly string[]' only permits reading.


//..............Multi-dimensional Arrays..............
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Tuples: Tuples are a special type of array that allows you to store multiple values of different types in a single variable.

//.............Basic Tuple Type.................
let chaiTuple: [string, number, boolean];
chaiTuple = ["Masala", 20, true];
// chaiTuple = [20,"masala",true] // Error: Type 'number' is not assignable to type 'string'.


//.............Optional Tuple Elements.................
let userInfo: [string, number, boolean?]
userInfo = ["John", 30]
userInfo = ["Jane", 25, true]


//.............Readonly Tuples.................
const location: readonly [number, number] = [28.6139, 77.2090]

const chaiItems: [name: string, price: number] = ["Ginger Chai", 25]



// Enums : Enums are a way to define a set of named constants.
// It makes it easier to document intent or create a set of distinct cases.
// It can be only used with a set of related constants, such as days of the week, directions, etc.
// single data type with multiple values.


//.............Basic Enum Type.................
enum ChaiSize {
    Small = "SMALL",
    Medium = "MEDIUM",
    Large = "LARGE"
}

// or 


//.............Numeric Enum Type.................
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE


//.............Enum with Custom Numeric Values.................
enum Status {
    PENDING = 100,
    SERVED, //101
    CANCELLED //102
}


//.............String Enum Type.................
enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
    ELAICHI = "elaichi"
}


//.............Using Enums in Functions.................
function makeChai(type: ChaiType) {
    console.log(`Making a cup of ${type} chai.`);
}
makeChai(ChaiType.ELAICHI);
// makeChai("masala");// masala is not assignable to parameter of type 'ChaiType'


//.............Heterogeneous Enums.................
enum RandomEnum {
    ID = 1,
    NAME = "Chai",
}


//.............Const Enums.................
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
// Usage of const enum
const s = Sugars.HIGH;


//.............Tuple with Enum.................
let t: [String, number] = ["Test", 123];
t.push("extra"); // This is allowed