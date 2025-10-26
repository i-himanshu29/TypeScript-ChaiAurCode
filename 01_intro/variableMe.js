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
var greetings = "Hello Himanshu";
var myNum = 6;
// myNum.toUpperCase() // does not exist on type number
greetings.toLowerCase();
console.log(greetings);
// number--------------------
// there is no need to use colon always
var userId = 334455.3;
userId.toFixed(); // typescript is so smart therfore no need to assign number in the parenthessis
// don't  use like this 
// let userId = number
// userId = 334455.3
//boolean
var isLoggedIn = false;
//any--------------------
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
// export {}
