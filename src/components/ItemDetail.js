import React from 'react';
import Counter from "../components/Counter"
import "../style/detail.css"

const ItemDetail = ( {item} ) => {

    return (
        <div className='card-detail'>
            <img src={item.img} alt={item.title}/>
            <div className='detail-description'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h4>${item.price}</h4>
                <Counter initial= {1} stock = {item.stock}/>
            </div>


        </div>
    )
};

export default ItemDetail;
