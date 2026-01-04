let response: any = "42";

// let numericResponse: number = response.length;

//forcedfull type assertion
let numericResponse: number = (response as string).length;

type Book = {
    name:string
}

let bookString = '{"name":"Who Moved My Cheese?"}';

let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);

const inputElement = document.getElementById("name") as HTMLInputElement;

let value:any
value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase()

let newValue:unknown
newValue = "chai"
newValue = [1,2,3]
newValue = 2.5
// newValue.toUpperCase() // Error: Object is of type 'unknown'.
if(typeof newValue === "string"){
    newValue.toUpperCase()
}

// try{

// }catch(error:any){ //Error type 'unknown' is not assignable to type 'any'.   
//     console.log(error.message)
// }

try{

}catch(error){
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Unknown error", error)
}

const data:unknown = "Chai aur Code"
const strData: string = data as string

// never: function that never returns a value

type Role = "admin" | "user" | "guest"

function redirectBasedOnRole(role:Role):void{
    if(role === "admin"){
        console.log("Redirect to admin dashboard")
        return 
    }  
    if(role === "user"){
        console.log("Redirect to user homepage")
        return 
    }
    if(role === "guest"){
        console.log("Redirect to guest welcome page")
        return 
    }
    // role; // should be of type 'never' here
}

// ..................................

type newRole = "admin" | "user" | "guest" | "superadmin"

function redirectBasedOnNewRole(role:newRole):void{
    if(role === "admin"){
        console.log("Redirect to admin dashboard")
        return 
    }  
    if(role === "user"){
        console.log("Redirect to user homepage")
        return 
    }
    if(role === "guest"){
        console.log("Redirect to guest welcome page")
        return 
    }
    role;
}

function neverReturningFunction():never{
    while(true){
        console.log("This function never returns")
    }
}