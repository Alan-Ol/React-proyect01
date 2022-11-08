import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';
import Cart from './Cart';
import "../style/main.css"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<ItemListContainer/>}
                />
                <Route
                    path="/category/:categoryName"
                    element={<ItemListContainer />}
                />
                <Route
                    path="/detail/:idProd"
                    element={<ItemDetailContainer />}
                />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    );
};

export default Main;

