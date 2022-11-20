import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
// import { products } from '../Products/products';
import { db } from '../firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';
import "../style/detail.css"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {idProd} = useParams();

    useEffect(() => {
        const itemCollection = collection(db, 'productos');
        const ref = doc(itemCollection, idProd);
        getDoc(ref).then((res) => {
            setItem({ id: res.id, ...res.data() });
        });

    }, [idProd]);

  
    return (
        <div className='detail__container'>
            <ItemDetail item ={item} />
        </div>
    );
};

export default ItemDetailContainer;



// const getProducts = () =>
// new Promise((res, rej) => {
//     const prod = products.find(
//         (prod) => prod.id === Number(idProd)
//     );
//     setTimeout(() => {
//         res(prod);
//     }, 500);
// });

// getProducts()
// .then((data) => {
//     setItem(data);
// })
// .catch((error) => {
//     console.log(error);
// });