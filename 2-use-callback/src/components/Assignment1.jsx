import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to 
// perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);
    const [c, setc] = useState(0);

    // Your code starts here
    const handleIncrement = useCallback(function() {
        setCount(count+1);
    }, [count])

    const handleDecrement = useCallback(function() {
        setCount(count-1);
    }, [count])
    // Your code ends here

    return (
        <div>
        <button onClick={()=>setc(c+1)}>{c}</button>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => {
    console.log('inside child')

    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    )
});
