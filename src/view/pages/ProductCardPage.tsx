import React from 'react';
import {CardProduct} from "../../features/CardProduct/CardProduct";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

export const ProductCardPage = () => {
    return (
        <>
            <Header/>
            <CardProduct />
            <Footer/>
        </>
    );
};

