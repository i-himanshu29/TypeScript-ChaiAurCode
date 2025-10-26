// // Types... : 
//  Number , 
//  String , 
//  Boolean , 
//  Any , 
//  Array , 
//  Tuple , 
//  Enum , 
//  Void , 
//  Null , 
//  Undefined , 
//  Never ,
//  unknown


//Declear the variable with the colon
// string--------------------
let greetings: string = "Hello Himanshu"
let myNum = 6;
// myNum.toUpperCase() // does not exist on type number
greetings.toLowerCase()
console.log(greetings);


// number--------------------
// there is no need to use colon always

let userId : number = 334455.3
userId.toFixed() // typescript is so smart therfore no need to assign number in the parenthessis

// don't  use like this 
// let userId = number
// userId = 334455.3


//boolean---------------
let isLoggedIn: boolean = false

//any--------------------
// avoid using any as much as possible
// any that you can use whenever you don't want a particular value to cause type checking errors

let hero:string;
function getHero(){
    return "thor" 
}
hero = getHero()

// export {}