// generics : TypeScript generics allow you to create reusable components that can work with a variety of data types while maintaining type safety.
//  Generics are defined using angle brackets <> and can be applied to functions, classes, and interfaces.

function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray("Masala")
wrapInArray(20)
wrapInArray<boolean>(true)
wrapInArray({ name: "John" })

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}
pair("masala", 20)
pair("masala", { name: "John" })

// generic interface
interface Box<T> {
    content: T;
}

const numberBox: Box<number> = { content: 100 }
const numberBoxCup: Box<string> = { content: "100" }

interface ApiPromise<T> {
    status: number,
    data: T
}
const res: ApiPromise<{ flavor: string }> = {
    status: 200,
    data: { flavor: "Masala" }
}