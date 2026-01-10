// fetch req without axios

import axios from "axios"

interface Todo {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Todo = await response.json()

    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error details:", error.message)
            if (error.response) {
                console.error("Status:", error.response.status)
                console.error("Data:", error.response.data)
            }
        }
    }
}

