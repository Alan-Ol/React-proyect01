import React from 'react';
import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);

    const addToCart = (item, stock) => {
        if (isInCart(item.id)) {
            totalQuantitySingleProduct(item, stock);
        } else {
            setCart([...cart, { ...item, stock }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    const totalQuantitySingleProduct = (item, stock) => {
        const updateProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const productUpdated = {
                    ...prod,
                    stock: stock,
                };

                return productUpdated;
            } else {
                return prod;
            }
        });
        setCart(updateProducts);
    };

    const totalQuantity = () => {
        let acumulador = 0;
        const copia = [...cart]
        copia.forEach((prod) => {
            acumulador += prod.stock;
        });
        setUnidades(acumulador);
    };

    const totalPrice = () => {
        let acumulador = 0;
        const copia = [...cart]
        copia.forEach((prod) => {
            acumulador += prod.stock * prod.price;
        });
        return acumulador;
    }; 

    const deleteOne = (id) => {
        const filteredProducts = cart.filter((prod) => prod.id !== id);
        setCart(filteredProducts);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.stock;
    };

    useEffect(() => {
        totalQuantity();
        // eslint-disable-next-line
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                unidades,
                addToCart,
                clearCart,
                deleteOne,
                totalPrice,
                totalQuantity,
                getProductQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;