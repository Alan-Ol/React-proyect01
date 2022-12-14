import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import  { Toaster, toast } from 'react-hot-toast';
import "../style/form.css"

const Form = ({ cart, total, clearCart, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, apellido: apellido },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clearCart();
            updateprod();
        });
    };

    const updateprod = () => {
        const orderDoc = doc(db, 'orders', 'A29yVRkpjasoaRfEo3G5');
        updateDoc(orderDoc, { total: 100 });
    };

    const handleChangeNombre = (event) => {
        //console.log(event.target.value);
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };


    return (
        <div className='formulario'>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    required
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    required
                    onChange={handleChangeApellido}
                />
                
                <button className='btn' onClick={() => toast.success('Realizaste la compra con exito')}>Enviar</button>
                <Toaster
                position='bottom-left'
                 />
            </form>
        </div>
    );
};

export default Form;
