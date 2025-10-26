const score: Array<number> = []

const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

// identityThree(3)
// identityThree("3")
// identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

// identityFour<Bottle>({})



function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[3]
}

// arrow function
// sometime <T> is like as <T,> which don't give us error  becoz it shows 
//<T> is not a HTML tag or jsx syntax but it is generic
const getMoreSearchProducts = <T>(products: T[]): T => { // generic arrow method,reference,data type, arrow function and definition
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

function anotherFunction<T, U>(valOne: T, valTwo: U): object { // <T, U> -> that , we can use multiple generics
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, "4")



// function anotherFunction1<T,U extends number>(valOne:T,valTwo:U):object{
//     return {
//         valOne,
//         valTwo
//     }
// }
// anotherFunction1(3,"4")

interface Database { // generic constraint
    connection: string,
    username: string,
    password: string
}

function anotherFunction1<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}
anotherFunction(3, {}) 

interface Quiz { // generic interface
    name: string,
    type: string
}

interface Course { // generic interface
    name: string,
    author: string,
    subject: string
}

class Sellable<T,>{ //generic class
    public cart: T[] = [] //generic array

    addToCart(products: T) { //generic method
        this.cart.push(products) // add products to cart array
    }
}

