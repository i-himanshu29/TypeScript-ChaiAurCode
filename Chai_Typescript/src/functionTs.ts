function makeChai(type: string, cups: number) {
    console.log(`Making a cup of ${type} with ${cups} cups.`);
}

makeChai("Masala Chai", 2);

function getChaiPrice(): number {
    // return "25 Ruppes"; // Error: Type 'string' is not assignable to type 'number'.
    return 50;
}

// function makeOrder(order:string): string{
//     if(!order) return null; // Error: Type 'null' is not assignable to type 'string'.
//     return order
// }

// logger functions...

function makeOrder(order: string) {
    if (!order) return null;
    return order;
}

function logChai(): void {
    console.log("Chai is being prepared...");
}

// function orderchai(type?:string){}

function orderChai(type: string = "Masala") {

}

function createChai(order: {
    type: string,
    sugar: number
    size: "small" | "medium" | "large"
}): number {
    return 4
}