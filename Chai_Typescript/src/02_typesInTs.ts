// type inference : TypeScript automatically infers types based on assigned values
// type annotation : Explicitly specifying types for variables

let drink = "chai"
// TypeScript infers the type of 'drink' as string
// - Syntax error: if we try to assign a value of a different type
// - type error:

let cups = Math.random() > 0.5 ? 10 : 5

let channelName = "ChaiAurCode"
// channelName = 22 // Error: Type 'number' is not assignable to type 'string'

//.........Type annotation.......................

let chaiFlavour: string = "Masala Chai"
chaiFlavour = "Ginger Chai" // overwriting with same type

// annotation types

let chaiPrice: number = 50
let chaiOrder: boolean = true

