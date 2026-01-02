let subs:number | string = '1M'

let apiRequestStatus:'pending'|'success' | 'error' = 'pending'
apiRequestStatus = 'success'
// apiRequestStatus = 'done' // Error: Type '"done"' is not assignable to type '"pending" | "success" | "error"'

let airlineSeat:'window' | 'aisle' | 'middle' = 'aisle'
airlineSeat = 'window'

const orders = ['12', '34', '56', '42']

let currentOrder:string|undefined;

for(let order of orders){
    if(order === '25'){
        currentOrder = order
        break
    }
    currentOrder = "11";
}


console.log(currentOrder) // currentOrder is of type string | undefined