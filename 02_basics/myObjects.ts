const User = {
    name :"Himanshu",
    email:"hima@gmail.com",
    isActive:true
}

function createUser({name:string, isPaid:boolean}){}

createUser({name:"Himanshu",isPaid:false})


let newUser = {name:"Himanshu",isPaid:false,email:"him@gmail.com" }
createUser(newUser)

// object returns and object
function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:399}
}


// type Aliases-------------------------------------
type User = {
    name:string;
    email:string;
    isActive:boolean
}

// How the type can used 

function createUserA(user:User):User{
    return ({name:"", email:"",isActive:true})
}

createUserA({name:"", email:"",isActive:true})

type UserA = {
    readonly _id:string   // you don't able to change that
    name:string
    email:string
    isActive:boolean
    creaditcardDetails?:number // ? - represents the optional 
}

let myUser:UserA = {
    _id:"1234",
    name:"h",
    email:"h@hero.com",
    isActive:false,
}

type cardNumber={
    cardNumber:string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & { // & used to combine all of the things together
    cvv:number
}


myUser.email = "h@gmail.com"
// myUser._id = "asa"

export {}