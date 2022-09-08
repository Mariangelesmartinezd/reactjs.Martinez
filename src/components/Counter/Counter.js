import { useState } from "react";


const Counter = ({sumar, restar, stock, und}) => {

   
    return (
        <>
            <div>Unidades {und} </div>
            <div>Existencia {stock} {und} </div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </>
    )
}

export default Counter;