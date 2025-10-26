let score: number | string = 33

score = 44

score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let himanshu: User | Admin = { name: "himanshu", id: 334 }

himanshu = { username: "him", id: 334 }

function getDbId(id: number | string) {
    // making some API calls
    console.log(`DB id is:${id}`);
}

getDbId(3)
getDbId("3")

function getDbIdA(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}


// arrays ------------------

// const data:number[]=[1,2,3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"

