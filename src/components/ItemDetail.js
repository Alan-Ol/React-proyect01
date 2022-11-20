import React, {useState} from 'react';
import Counter from "../components/Counter"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import "../style/detail.css"

const ItemDetail = ( {item} ) => {

    const [cantidad, setCantidad] = useState(0);
    const { addToCart, getProductQuantity } = useContext(CartContext);

    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem);
        addToCart(item, cantidadItem);
    };

    const quantity = getProductQuantity(item.id);

    return (
        <div className='card-detail'>
            <img src={item.img} alt={item.title}/>
            <div className='detail-description'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h4>${item.price}</h4>
                {cantidad === 0 ? (
                    <Counter 
                        stock = {item.stock} 
                        initial= {quantity} 
                        onAdd = {onAdd}
                    />
                ) : (
                    
                    <Link to ="/cart">Ir al carrito</Link>
                )}

            </div>


        </div>
    )
};

export default ItemDetail;
