import React , { useState } from 'react'
// import  { Toaster, toast } from 'react-hot-toast';
import { useEffect } from 'react';
import "../style/button.css"



const Counter = ({ stock, onAdd, initial = 1 }) =>{
    const [count, setCount] = useState(initial);

    useEffect(() => {
        setCount(initial);
    }, [initial]);

    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        setCount(count - 1);
    };

    const agregarAlCarrito = () => {
        onAdd(count);
    };


    return (
        <div className='btn-detail'>
            <p>Cantidad: {count} </p>
            <div className='btn-count'>
                <button  onClick ={restar}>-</button>
                <button  onClick ={sumar}>+</button>
            </div>
            <button onClick ={agregarAlCarrito} className="btn-shop"> Agregar al carrito</button>
            {/* <Toaster
                position='bottom-left'
            /> */}
        </div>
    )
}


export default Counter


// () => toast.success('Agregado al carrito')