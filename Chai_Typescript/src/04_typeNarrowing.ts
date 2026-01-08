// Type Narrowing in TypeScript means reducing a broad type (like string | number) to a more specific type based on checks in your code.
// TypeScript provides several techniques for type narrowing, including:
// 1. typeof checks
// 2. instanceof checks
// 3. in operator checks
// 4. User-defined type guards
// 5. Discriminated unions

// ....Type narrowing using typeof......
function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} Chai...`
    }
    return `Chai order: ${kind}`
}

// .......Type narrowing using optional parameters.........
function serveChai(msg?: string) {
    if (msg) {
        return `Serving: ${msg}`
    }
    return `Serving default masala chai`;
}

// .........Type narrowing using multiple types.......
function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return "Ordering small cutting chai"
    }
    if (size === "medium" || size === "large") {
        return "Ordering extra chai"
    }
    return `Ordering chai of size: #${size}`
}

// ........Type narrowing using instanceof..............
class KulhadChai {
    serve() {
        return "Serving chai in kulhad"
    }
}
class Cutting {
    serve() {
        return "Serving chai in cutting glass"
    }
}

function serve(chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai) { // instanceof is used to check the class type
        return chai.serve()
    }
}

//............user-defined type guard......................
type ChaiOrder = {
    type: string
    sugar: number
}

// User-defined type guard function
function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

// Using the user-defined type guard
function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`
    }
    return `Serving order: ${item}`
}

// ..........Type narrowing using discriminated unions.................
type MasalaChai = { type: "masala", spicelevel: number };
type GingerChai = { type: "ginger", amount: number };
type CardamomChai = { type: "cardamom", aroma: number };

type Chai = MasalaChai | GingerChai | CardamomChai;

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Making masala chai with spice level ${order.spicelevel}`;
            break;
        case "ginger":
            return `Making ginger chai with amount ${order.amount}`;
            break;
        case "cardamom":
            return `Making cardamom chai with aroma ${order.aroma}`;
            break;
    }
}

function brew(order: MasalaChai | GingerChai) {
    if ("spicelevel" in order) {
        return `Brewing masala chai with spice level ${order.spicelevel}`;
    }
}

// unknown type narrowing with user-defined type guard
// it encompases the type of every possible value
// it does not force us to do any checking before we try to call , construct or access properties on values of type unknown
// It also lets us assign values of type any to values thaat expect any other type.

function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}