// Object : collection of key-value pairs
// In TypeScript, we can define the shape of an object using type aliases or interfaces.
// It is important to note that TypeScript uses structural typing (also known as duck typing).
// object types are compared based on their structure rather than their explicit declarations.

//................Defining an object using an object literal..............
const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}
// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }


//............Explicit Object Type Annotation.......
let tea: {
    name: string;
    price: number;
    isHot: boolean;
}
tea = {
    name: "Ginger Tea",
    price: 15,
    isHot: false
}

//.........Using type alias to define object structure................
type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}
const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["water", "milk", "tea leaves", "ginger", "sugar"]
}



//.........Structural Typing Example.................
// Duck Typing: if it looks like a duck and quacks like a duck, it's a duck

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "400ml", material: "steel" };
smallCup = bigCup; //Allowed: bigCup has at least the properties of smallCup


//...........Another Structural Typing Example...........
type Brew = { brewTime: number }
const coffee = { brewTime: 5, beans: "arabica" };
const chaiBrew: Brew = coffee


//..............TypeScript Utility Types..................
type User = {
    username: string;
    password: string;
}

const u: User = {
    username: "chailover",
    password: "securepassword"
}


//.............Split an object into smaller parts......
type Item = { name: string, quantity: number }
type Address = { street: string, pin: number }

type Order = { //Combining all parts
    id: string;
    items: Item[];
    address: Address;
}


//............partial: makes all properties of a type optional........
// This is useful when we want to update only a subset of properties in an object.
// For example, when updating user settings, we might only want to change a few fields without providing the entire object.

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}
const updateChai = (updates: Partial<Chai>) => { // Partial makes all properties optional , updates can have any subset of Chai properties
    console.log("Updating chai with", updates)
    const defaultChai: Chai = {
        name: "Regular Chai",
        price: 10,
        isHot: true
    }
    return { ...defaultChai, ...updates }
}
// Examples of using updateChai
updateChai({ price: 15 })
updateChai({ isHot: false })
updateChai({})//Sometime we may not want to update anything and it create issues


//.............required: makes all properties of a type required........
// This is useful when we want to ensure that an object has all the necessary properties before performing certain operations.
// For example, when placing an order, we want to make sure that all required details are provided.

type ChaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<ChaiOrder>) => { // Required makes all properties mandatory
    console.log(`Placing order for ${order.quantity} cups of ${order.name}`)
}
placeOrder({
    name: "Masala Chai",
    quantity: 2
}) // Error if any property is missing


//.............pick: creates a new type by picking specified properties from an existing type........
type newChai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type BasicChaiInfo = Pick<newChai, "name" | "price">; // Pick only name and price properties
const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 18
}// Error if any other property is included



//.............omit: creates a new type by omitting specified properties from an existing type.......
type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[];
}
type PublicChai = Omit<newChai, "secretIngredients">