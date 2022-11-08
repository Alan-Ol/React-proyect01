import React from 'react';
import Item from './Item';
import "../style/card.css"

const ItemList = ({ items }) => {
    return (
        <div className='main-card'>
            {items.map((item) => {
                return <Item key={item.id} item={item} />;
            })}
        </div>
    );
};

export default ItemList;

