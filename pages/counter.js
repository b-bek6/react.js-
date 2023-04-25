import { useState } from "react"

export default function counter() {
    let initial_value = 0
    let [ count, setCount ] = useState(initial_value) // returns [array] <- that is array destructure
    function increment() {
        setCount(++count)
    }
    function decrement() {
        setCount(--count)
    }
    return ( <>
    <h1>Count <span id="count">{count}</span></h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}