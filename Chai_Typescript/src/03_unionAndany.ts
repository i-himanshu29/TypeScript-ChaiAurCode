// Union : A variable that can hold multiple types
// it is denoted by using the pipe (|) symbol between types
// if a variable can hold more than one type, we use union types

// Any : A variable that can hold any type
// it is denoted by using the 'any' keyword
// if a variable can hold any type, we use 'any' type


let subs: number | string = '1M'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'
apiRequestStatus = 'success'
// apiRequestStatus = 'done' // Error: Type '"done"' is not assignable to type '"pending" | "success" | "error"'

let airlineSeat: 'window' | 'aisle' | 'middle' = 'aisle'
airlineSeat = 'window'

const orders = ['12', '34', '56', '42']

// Step-1 ..................

// let currentOrder; // yaha currentOrder ki type any hai
// // any datatype means mujhe parwah nahi ki tum kya daloge, main sab kuch accept kar lunga
// for (let order of orders) {
//     if (order === '25') {
//         currentOrder = order
//         break
//     }
// }
// currentOrder = 42; // no error , which is not good for type safety
// console.log(currentOrder) // currentOrder is of type string | undefined


// step-2 ..................

// let currentOrder: string ;

// for (let order of orders) {
//     if (order === '25') {
//         currentOrder = order
//         break
//     }
//     currentOrder = "11";
// }
// // agar currentOrder loop ke andar gaya hi nahi to error dega ,
// // hence we use union in step-3
// console.log(currentOrder) // currentOrder is of type string


// step-3 ................

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === '25') {
        currentOrder = order
        break
    }
    currentOrder = "11";
}

console.log(currentOrder) // currentOrder is of type string | undefined