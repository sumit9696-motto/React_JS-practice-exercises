import React from "react";
import { useContext } from "react";
import { CounterContext } from "../Context/Counter";


const Counter = ()=>{
    const counterContext = useContext(CounterContext);
    return(
        <div>
            <button onClick={() => counterContext.setCount(counterContext.count+1)}>+</button>
            <button onClick={() => counterContext.setCount(counterContext.count-1)}>-</button>
        </div>
    );
};
export default Counter;