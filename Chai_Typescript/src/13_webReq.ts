// axios : promise based HTTP client for the browser and node.js

// import axios from "axios"

// axios.get("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => {
//         console.log("Data:", response.data)
//     })
//     .catch(error => {
//         console.error("Error fetching data:", error)
//     })


// // {
// //     "userId": 1,
// //     "id": 1,
// //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// //   }

// Inteface me jo bhi request se data aayega ya bhejenge uske structure ko define karne ke liye use karte hai.


// //step-2..................
// import axios from "axios"

// interface Todo{
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// axios.get("https://jsonplaceholder.typicode.com/posts/1")
//     .then(response => {
//         console.log("Data:", response.data)
//     })
//     .catch(error => {
//         console.error("Error fetching data:", error)
//     })




//step-3.........axios fetch req.........

import axios from "axios"
import type { AxiosResponse } from "axios"

interface Todo {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        const todo: Todo = response.data
        console.log("Todo:", todo)
    } catch (error: any) {
        // console.error("Error fetching data:", error)
        if (axios.isAxiosError(error)) {
            console.error("Axios error details:", error.message)
            if (error.response) {
                console.error("Status:", error.response.status)
                console.error("Data:", error.response.data)
            }
        }
    }
}

