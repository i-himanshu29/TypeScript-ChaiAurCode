// Interface : used to define the structure of an object
// it is similar to type alias but with some differences
// like can be extended and merged

// function makeChai(order: { type: string; sugar: number; strong: boolean }) {
//     console.log(order);
// }

// function serveChai(order: { type: string; sugar: number; strong: boolean }) {
//     console.log(`Serving ${order.type} chai with ${order.sugar} spoons of sugar. Strong: ${order.strong}`);
// }



// Using type alias to define the structure of an object
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder) {
    console.log(order);
}

function serveChai(order: ChaiOrder) {
    console.log(order);
}




// type TeaRecipe = {
//     water: number;
//     milk: number;
// }

// class hai..
// class MasalaChai implements TeaRecipe {
//     water = 100;
//     milk = 50;
// }

// type CupSize = "small" | "medium" | "large";

// class Chai implements CupSize { // Error: A class can only implement an object type or intersection of object types with statically known members.

// }




// interface : used to define the structure of an object

interface TeaRecipe {
    water: number;
    milk: number;
}
class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}
interface CupSize {
    size: "small" | "medium" | "large"; // property with union type 
}

class Chai implements CupSize {
    size: "small" | "medium" | "large" = "medium";
}



// type Response = {ok:true} | {ok:false}
// class myRes implements Response { // Error: A class can only implement an object type or intersection of object types with statically known members.
//     ok: true | false = true;
// }

type TeaType = "masala" | "ginger" | "cardamom";

function orderChai(t: TeaType) {
    console.log(`Ordering ${t} chai`);
}

// intersection : combining multiple types into one

type BaseChai = { teaLeaves: number }
type Extra = { masala: number }

type SimpleChai = BaseChai & Extra;

const cup: SimpleChai = {
    teaLeaves: 5,
    masala: 2
}

type User = {
    username: string;
    bio?: string;
}
const u1: User = { username: "chai_lover" };
const u2: User = { username: "tea_fan", bio: "I love chai!" };

type Config = {
    readonly appName: string;
    version: string;
}

const cfg: Config = { // readonly property
    appName: "ChaiApp",
    version: "1.0.0"
}

// cfg.appName = "NewChaiApp" // Error: Cannot assign to 'appName' because it is a read-only property.
cfg.version = "1.0.1" // Allowed