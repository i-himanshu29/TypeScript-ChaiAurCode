// type Narrowing = number | string
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase()
  }
  return val + 3
}

// extra focus needed 
function provideId(id: string | null) {
  if (!id) {
    console.log("please provide ID");
    return
  }
  id.toLowerCase()
}


function printAll(strs: string | string[] | null) {

  if (strs) {
    if (typeof strs === "object") { // array also treated as object
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

//---------------------------------

interface User {
  name: string,
  email: string
}

interface Admin {
  name: string,
  email: string,
  isAdmin: boolean // isAdmin only exists when interface is Admin
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin
  }
}


// new Date() , new Array()
// instanceof 
function logValue(x: Date | string) {
  if (x instanceof Date) { // instanceof check the this object is intance of some class or something like that 
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// type Predicates -------------------------
// user-defined type guards
type Fish = { swim: () => void };
type Bird = { fly: () => void };

// type predicate function
function isFish(pet: Fish | Bird): pet is Fish { // 
  return (pet as Fish).swim !== undefined;
}

// usage of type predicates
function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet
    return "fish food"
  } else {
    pet
    return "bird Food"
  }
}

// Discriminated Unions -------------------------
interface Circle {
  kind: "circle",
  radius: number
}

interface Square {
  kind: "square",
  side: number
}

interface Rectangle {
  kind: "rectangle",
  length: number,
  width: number
}

//------------------
// union type
type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2
  }
  // return shape.side * shape.side
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2

    case "square":
      return shape.side * shape.side

    case "rectangle":
      return shape.length * shape.width

    default:
      const _defaultforshape: never = shape
      return _defaultforshape
  }
}