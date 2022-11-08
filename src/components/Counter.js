import React , { useState } from 'react'
import  { Toaster, toast } from 'react-hot-toast';
import "../style/button.css"



const Counter = ({stock, initial}) =>{
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock ? setCount (count + 1) : alert('Sin stock');  
    };
    const restar = () => {

        count > initial && setCount(count - 1)
    };
    console.log(sumar)
    console.log (count)


    return (
        <div className='btn-detail'>
            <p>Cantidad: {count} </p>
            <div className='btn-count'>
                <button  onClick ={restar}>-</button>
                <button  onClick ={sumar}>+</button>
            </div>
            <button  disabled ={ count === 0} onClick ={() => toast.success('Agregado al carrito')} className="btn-shop"> Agregar al carrito</button>
            <Toaster
                position='bottom-left'
            />
        </div>
    )
}


export default Counter