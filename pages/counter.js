import { useState } from "react"
import Header from "@/components/header"

export default function counter() {
    let initial_value = 0
    let time = "10pxm"
    let [ count, setCount ] = useState(initial_value) // returns [array] <- that is array destructure
    let [number, setNumber] = useState(100) // [ 100, mutatorFunction ]

    function increment() {
        console.log("increment");
        setCount(++count)
    }
    function incrementNumber() {
        setNumber(1234134)
    }
    function decrement() {
        setCount(--count)
    }
    return ( <>
        <Header num="200"/>
        <h1>Number: {number}</h1>

    <h1>Count <span id="count">{count}</span></h1>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementNumber}>incrementNumber</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}