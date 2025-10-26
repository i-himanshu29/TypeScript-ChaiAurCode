console.log("typescript is here still")
console.log("typescript is amazing")

//create classes in typescript
// class User {
//     email:string
//     name:string
//     readonly city:string="Jaipur"
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name
//     }
// }

// const himanshu = new User("h@h.com","himanshu")

// himanshu.city 


// if you can private it you cannot access city 

// Everything you don't mark are as public and or as private
class User {
    public email:string
    name:string // you can use # in the place of private like '#name' over 'private name'
    // # is javascript world and private is typescript world
    private readonly city:string="Jaipur"
    constructor(email:string,name:string){
        this.email = email;
        this.name = name
    }
}

const himanshu = new User("h@h.com","himanshu")

himanshu.city 


//************************************* */

class UserA {

    // private _courseCount=1
    protected _courseCount=1


    readonly city:string = "jaipur"
    constructor(
        public email:string,
        public name:string,
        // private userId:string
        ){

    }

    // similar to private property there is private method as well
    private deleteToken(){
        console.log("Token deleted");
    }

    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number {
        return this._courseCount
    }

    // setter have no return type
    set courseCount(courseNum) { // you are not allowed to write number or void
        if(courseNum <= 1){
            throw new Error("Course")
        }
        this._courseCount = courseNum
    }

}

const hitesh = new UserA("h@h.com","hitesh")

hitesh.deleteToken() // not accessiable becoz out of scope

//--------------------------------------------

class subUser extends User {
    isFamily : boolean = true
    changeCourseCount(){
        this._courseCount = 4;
    }
}