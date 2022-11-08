import React from 'react';
import { Link } from 'react-router-dom';
import "../style/card.css"

const Item = ({ item }) => {
    return (
        <div className='card'>
                <img src={item.img} alt="" />
                <div className='description'>
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>
                    <Link to={`/detail/${item.id}`} className='btn'>Ver detalle</Link>
                </div>
        </div>
    );
};

export default Item;
