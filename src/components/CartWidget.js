import React from 'react';
import {BiShoppingBag} from "react-icons/bi"
import "../style/navbar.css"

const CartWidget = () => {
    return (
        <div className='shop-icon'>
            <BiShoppingBag/>
            <span>0</span>
        </div>
    );
};

export default CartWidget;
