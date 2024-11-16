import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function Increment() {
        setCount(count + 1);
    }
    function Decrement() {
        setCount(count - 1);
    }
    
    return (
    <div>
        <button onClick={Increment}>Increment </button>
        <button onClick={Decrement}>Decrement </button>
        <p>{count}</p>
    </div>
    );
}

export default Counter