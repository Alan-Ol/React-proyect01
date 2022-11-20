import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import PulseLoader from 'react-spinners/PulseLoader';
import {db} from "../firebaseConfig"
import ItemList from './ItemList';
import "../style/card.css"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const itemCollection = collection(db, "productos");

        const referencia = categoryName
            ? query(itemCollection, where('category', '==', categoryName))
            : itemCollection;

        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [categoryName]);

    return (
        <div>
            {isLoading ? (
                <div className='loader'>
                    <PulseLoader color="red" size={50}/>
                </div>
            ) : (
                <>
                    <ItemList items={items}/>
                </>
            )}
        </div>
    )

        

};

export default ItemListContainer;


// const getProducts = () =>
// new Promise((res, rej) => {
//     const prodFiltrados = products.filter(
//         (prod) => prod.category === categoryName
//     );
//     setTimeout(() => {
//         res(categoryName ? prodFiltrados : products);
//     }, 500);
// });

// getProducts()
// .then((data) => {
//     setItems(data);
// })
// .catch((error) => {
//     console.log(error);
// });

