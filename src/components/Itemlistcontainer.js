import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Products/products';
import ItemList from './ItemList';
import "../style/card.css"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = () =>
            new Promise((res, rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.category === categoryName
                );
                setTimeout(() => {
                    res(categoryName ? prodFiltrados : products);
                }, 500);
            });

        getProducts()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

    return (<ItemList items={items}/>);
};

export default ItemListContainer;

