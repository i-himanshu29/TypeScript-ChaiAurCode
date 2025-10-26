"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Himanshu",
    email: "hima@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Himanshu", isPaid: false });
var newUser = { name: "Himanshu", isPaid: false, email: "him@gmail.com" };
createUser(newUser);
// object returns and object
function createCourse() {
    return { name: "reactjs", price: 399 };
}
// How the type can used 
function createUserA(user) {
    return ({ name: "", email: "", isActive: true });
}
createUserA({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "h",
    email: "h@hero.com",
    isActive: false,
};
myUser.email = "h@gmail.com";
