// const user:(string | number)[] = [1,"him"]
let tUser: [string, number, boolean]
tUser = ["him", 131, true]
// tUser = [true,1223,"him"] // Error


let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@gmail.com"]
newUser[1] = "him.com"

// newUser.push(true)

export { }