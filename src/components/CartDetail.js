import React from 'react';
import "../style/carrito.css"


const CartDetail = ({ prod, deleteOne }) => {
    return (
                <div className='item'>
                    <img src={prod.img} alt={prod.title} className="img-item"/>
                    <div className='item-description'>
                        <h3>{prod.title}</h3>
                        <p>Cantidad: {prod.stock}</p>
                        <h2>Precio${prod.price}</h2>
                    </div>
                    <div >
                        <button onClick={() => deleteOne(prod.id)} className="btn-delete">X</button>
                    </div>   
                </div> 
    );
};

export default CartDetail;
