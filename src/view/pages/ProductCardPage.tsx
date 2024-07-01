import React from 'react';
import {CardProduct} from "../../features/CardProduct/CardProduct";
import {Header} from "../../features/Header/Header";
import {Footer} from "../../features/Footer/Footer";

export const ProductCardPage = () => {
    return (
        <>
            <Header/>
            <CardProduct />
            <Footer/>
        </>
    );
};

