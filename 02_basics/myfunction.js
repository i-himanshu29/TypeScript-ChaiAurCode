"use strict";
// function addTwo(num:number){
//     num.toUpperCase()
//     return num+2
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function addTwo(num:number){
//     return num+2
// }
function addTwo1(num) {
    return "hello";
}
// in the case of function it is neccessary to give Type like string, boolean etc.
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// addTwo("5") // not allowed
// addTwo(5)
var myValue = addTwo1(5);
// getUpper(4)
getUpper("Himanshu");
signUpUser("Himanshu", "himanshu@gmail", false);
loginUser("Him", "Him@gmail.com"); // if u want to pass 2 value then set the default
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
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
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// heros.map((hero: string)=>{
//     return `hero is ${hero}`
// })
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
