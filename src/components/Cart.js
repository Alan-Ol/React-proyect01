import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import Form from './Form';
import {BiHomeSmile} from "react-icons/bi"
import CartDetail from './CartDetail';
import "../style/product.css"

const Cart = () => {
    const [idCompra, setIdCompra] = useState('');
    const { cart, clearCart, deleteOne, totalPrice } = useContext(CartContext);

    const total = totalPrice();

    const handleId = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return <h1>Gracias por comprar tu id es: {idCompra}</h1>;
    }

    if (cart.length === 0) {
        return (
            <div className='product'>
                <Link to="/"><BiHomeSmile className='icon-shop'/></Link>
                <h3>No hay ningun producto en el carrito</h3>
            </div>

        );
    }

    return (
        <div className='carrito'>
            {cart.map((prod) => (
            <div className='prod-item'>
                <CartDetail key={prod.id} prod={prod} deleteOne={deleteOne} />
            </div>
                
            ))}

            <button onClick={clearCart}>Clear Cart</button>
            <h4>Total: ${total}</h4>
            <Form
                cart={cart}
                total={total}
                clearCart={clearCart}
                handleId={handleId}
            />
        </div>
    );
};

export default Cart;
