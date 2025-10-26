interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    // startTrail:()=>string
    startTrail(): string// it is a method which return string
    getCoupon(couponname: string, value: number):
        number
}

//reopening of interface 
interface User {
    githubToken: string
}

// extending interface
// inheritance 
interface Admin extends User { // also you can add another interface here
    role: "admin" | "ta" | "learner"
}

const himanshu: Admin = {
    dbId: 22,
    email: "h@h.com",
    userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "himanshu10", off: 10) => {
        return 10
    }
}
himanshu.email = " h@hc.com"
// himanshu.dbId =33