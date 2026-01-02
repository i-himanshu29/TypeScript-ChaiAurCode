let drink = "chai"
// TypeScript infers the type of 'drink' as string
let cups = Math.random() > 0.5 ? 10 : 5

let channelName = "ChaiAurCode"
// channelName = 22 // Error: Type 'number' is not assignable to type 'string'

// Type annotation
let chaiFlavour: string = "Masala Chai" 
chaiFlavour = "Ginger Chai"

let chaiOrder:boolean = true