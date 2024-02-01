import { useState } from "react";

export const CounterApp =({value}) =>{

let [counter , setCounter] = useState(value);
const counterIncrement =()=> setCounter(++counter);  


    return <>
    <h2>El valor del contador es {counter}</h2>
    <button onClick={   counterIncrement }>incrementar boton +1</button>
    </>
}