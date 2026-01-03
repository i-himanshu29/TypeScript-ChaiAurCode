// Type Narrowing in TypeScript means reducing a broad type (like string | number) to a more specific type based on checks in your code.
function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} Chai...`
    }
    return `Chai order: ${kind}`
}

function serveChai(msg?: string) {
    if (msg) {
        return `Serving: ${msg}`
    }
    return `Serving default masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return "Ordering small cutting chai"
    }
    if (size === "medium" || size === "large") {
        return "Ordering extra chai"
    }
    return `Ordering chai of size: #${size}`
}

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
    if (chai instanceof KulhadChai) {
        return chai.serve()
    }
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`
    }
    return `Serving order: ${item}`
}

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

function isStringArray(arr: unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}