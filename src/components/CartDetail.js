import React from 'react';

const CartDetail = ({ prod, deleteOne }) => {
    return (
        <div>
            <h3>{prod.title}</h3>
            <h3>Cantidad: {prod.stock}</h3>
            <h3>Precio${prod.price}.-</h3>
            <button onClick={() => deleteOne(prod.id)}>Delete</button>
        </div>
    );
};

export default CartDetail;
