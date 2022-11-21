import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import Form from './Form';
import {BiCheckCircle} from "react-icons/bi"
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
        return <div className='clean-shop'>
                <BiCheckCircle className='clean-icon'/>
                <p>Gracias por tu compra, tu id de producto es: <br/> <span>{idCompra}</span> </p>
                <Link to="/" className='btn'>Volver al inicio</Link>
            </div>;
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
            <div className='price'>
                <h4><span>Total:</span> ${total}</h4>
                <button onClick={clearCart} className="btn">Clear Cart</button>
            </div>


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
