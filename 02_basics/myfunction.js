"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    num.toUpperCase();
    return num + 2;
}
// function addTwo(num:number){
//     return num+2
// }
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
addTwo(5);
// getUpper(4)
getUpper("Himanshu");
signUpUser("Himanshu", "himanshu@gmail", false);
loginUser("Him", "Him@gmail.com"); // if u want to pass 2 value then set the default
