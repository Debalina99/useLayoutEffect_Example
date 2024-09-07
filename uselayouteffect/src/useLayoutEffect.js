import React, { useEffect, useState, useLayoutEffect } from 'react';

export default function UseLayoutEffect() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("useEffect With Empty Dependency");
    })
    useEffect(() => {
        console.log("useEffect Dependency with values");
    }, [counter])

    useLayoutEffect(() => {
        console.log("useLayoutEffect With Empty Dependency");
    })
    useLayoutEffect(() => {
        console.log("useLayoutEffect Dependency with values");
    }, [counter])

    const clickHandler = () => {
        setCounter((prev) => prev + 1)
    }
    return (
        <div>
            <h3>useLayoutEffect Example</h3>
            <h4>{counter}</h4>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}