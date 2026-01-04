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

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "400ml", material: "steel" };
smallCup = bigCup; //Allowed: bigCup has at least the properties of smallCup

type Brew = { brewTime: number }
const coffee = { brewTime: 5, beans: "arabica" };
const chaiBrew: Brew = coffee

type User = {
    username: string;
    password: string;
}

const u: User = {
    username: "chailover",
    password: "securepassword"
}

type Item = { name: string, quantity: number }
type Address = { street: string, pin: number }

type Order = {
    id: string;
    items: Item[];
    address: Address;
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}
const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with", updates)
    const defaultChai: Chai = {
        name: "Regular Chai",
        price: 10,
        isHot: true
    }
    return { ...defaultChai, ...updates }
}

updateChai({ price: 15 })
updateChai({ isHot: false })
updateChai({})//Sometime we may not want to update anything and it create issues

type ChaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(`Placing order for ${order.quantity} cups of ${order.name}`)
}
placeOrder({ name: "Masala Chai", quantity: 2 })

type newChai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type BasicChaiInfo = Pick<newChai, "name" | "price">
const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 18
}

// omit: creates a new type by omitting specified properties from an existing type
type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[];
}
type PublicChai = Omit<newChai,"secretIngredients">