const score : Array<number> = []

const names:Array<string> =[]

function identityOne(val:boolean | number) : boolean | number{
    return val
}

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val : Type):Type{
    return val
}

// identityThree("3")

function identityFour<T>(val:T):T{
    return val
}

interface Bootle{
    brand:string,
    type:number

}

// identityFour<Bootle>({})

function getSearchProducts<T>(products:T[]):T{
    // do some database operations
    const myIndex = 3
    return products[3]
}

// arrow function
// sometime <T> is like as <T,> which don't give us error  becoz it shows 
//<T> is not a HTML tag or jsx syntax but it is generic
const getMoreSearchProducts = <T>(products:T[]): T =>{ // generic arrow method,reference,data type, arrow function and definition
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}

function anotherFunction<T,U>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3,"4")



// function anotherFunction1<T,U extends number>(valOne:T,valTwo:U):object{
//     return {
//         valOne,
//         valTwo
//     }
// }
// anotherFunction1(3,"4")

interface Database {
    connection:string,
    username:string,
    password:string
}

    function anotherFunction1<T,U extends Database>(valOne:T,valTwo:U):object{
        return {
            valOne,
            valTwo
        }
    }
    anotherFunction(3,{})

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T,>{
    public cart:T[]=[]

    addToCart(products:T){
        this.cart.push(products)
    }
}

