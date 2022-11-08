import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import "../style/navbar.css"

const Navbar = () => {
        return (
            <nav>
                <Link to="/" className={"icon"}>NIKE</Link>
                <ul>
                    <NavLink to="/category/basket" className={"nav__link"}>BASKET</NavLink>

                    <Link to="/category/moda" className={"nav__link"}>MODA</Link>

                    <Link to="/category/deportiva" className={"nav__link"}>DEPORTIVA</Link>
                </ul>
                <Link to="/cart">
                    <CartWidget />
                </Link>
            </nav>
        );    
};

export default Navbar;
