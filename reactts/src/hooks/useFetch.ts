import { useEffect, useState } from 'react';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    // useEffect to make fetch request
    return state;
}

//..........chatgpt..........

// import { useEffect, useState } from "react";

// interface FetchState<T> {
//   data: T | null;
//   loading: boolean;
//   error: string | null;
// }

// export function useFetch<T>(url: string): FetchState<T> {
//   const [state, setState] = useState<FetchState<T>>({
//     data: null,
//     loading: true,
//     error: null,
//   });

//   useEffect(() => {
//     let isMounted = true; // to avoid state update after unmount

//     setState({
//       data: null,
//       loading: true,
//       error: null,
//     });

//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return res.json();
//       })
//       .then((data: T) => {
//         if (isMounted) {
//           setState({
//             data,
//             loading: false,
//             error: null,
//           });
//         }
//       })
//       .catch((err: Error) => {
//         if (isMounted) {
//           setState({
//             data: null,
//             loading: false,
//             error: err.message,
//           });
//         }
//       });

//     return () => {
//       isMounted = false;
//     };
//   }, [url]);

//   return state;
// }
