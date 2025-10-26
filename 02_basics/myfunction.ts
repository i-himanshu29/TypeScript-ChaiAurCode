// function addTwo(num:number){
//     num.toUpperCase()
//     return num+2
// }

// function addTwo(num:number){
//     return num+2
// }

function addTwo1(num:number){
    return "hello"
}

// in the case of function it is neccessary to give Type like string, boolean etc.
function getUpper(val:string){ 
    return val.toUpperCase()
}


function signUpUser(name:string, email:string , isPaid:boolean){

}

let loginUser = (name:string,email:string, isPaid:boolean=false)=>{

}
// addTwo("5") // not allowed
// addTwo(5)

let myValue = addTwo1(5)

// getUpper(4)
getUpper("Himanshu")

signUpUser("Himanshu","himanshu@gmail",false)

loginUser("Him","Him@gmail.com")// if u want to pass 2 value then set the default


function getValue(myVal:number){
    if(myVal > 5){
        return true
    }
    return "200 OK"
}

// Now suppose we explicit the Type then Both return statement will be contradiction
// if we give boolean then return 200 OK will give us error
// if we  give string then return true statement will give us error

// function getValue1(myVal:number):Boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }


const getHello = (s:string):string =>{
    return ""
}

const heros = ["thor","spiderman","ironman"]
// const heros = [1,2,3]
heros.map(hero=>{
    return `hero is ${hero}`
})


heros.map((hero):string =>{
    return `hero is ${hero}`
})



// heros.map((hero: string)=>{
//     return `hero is ${hero}`
// })


function consoleError(errmsg : string):void{
    console.log(errmsg);
}

function handleError(errmsg : string):never{ // prefer never over  void in the case of handleError
    throw new Error(errmsg);
   
}
export {}