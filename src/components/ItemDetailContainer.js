import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { products } from '../Products/products';
import "../style/detail.css"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {idProd} = useParams();

    useEffect(() => {
        const getProducts = () =>
            new Promise((res, rej) => {
                const prod = products.find(
                    (prod) => prod.id === Number(idProd)
                );
                setTimeout(() => {
                    res(prod);
                }, 500);
            });

        getProducts()
            .then((data) => {
                setItem(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [idProd]);

  
    return (
        <div className='detail__container'>
            <ItemDetail item ={item} />
        </div>
    );
};

export default ItemDetailContainer;
