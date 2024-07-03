import React, {useState} from 'react';
import {Banner} from "../../features/Banner/Banner";
import {ColdSnacksContentList} from "../../features/MenuContentList/ColdSnacksContentList";
import {Portfolio} from "../../features/Portfolio/Portfolio";
import {NavBar} from "../../features/NavBar/NavBar";
import {ProductArrayType} from "../../App/App";

export type HomePagePropsType = {
    products: ProductArrayType
    quantityBuyProduct: number
    setQuantityBuyProduct: (newValue: number)=>void
}
export const HomePage = (props: HomePagePropsType) => {

    const [tabNumber,setTabNumber] = useState(1)

    const products = tabNumber === 1 ? props.products['coldSnacks'] : tabNumber === 2 ? props.products['hotSnacks'] : tabNumber === 3 ? props.products['meatSnacks']: tabNumber === 4 ? props.products['soaps']: tabNumber === 5 ? props.products['fishSnacks']: tabNumber === 6 ? props.products['grillMenu']: tabNumber === 7 ? props.products['brandedMenu']: tabNumber === 8 ? props.products['drinks']: []
    return (
        <>
            <Banner/>
            <NavBar setTabNumber={setTabNumber} activeTab={tabNumber}/>
            <ColdSnacksContentList setQuantityBuyProduct={props.setQuantityBuyProduct} quantityBuyProduct={props.quantityBuyProduct} tabNumber={tabNumber} products={products}/>
            <Portfolio/>
        </>
    );
};

