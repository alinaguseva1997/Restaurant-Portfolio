import React from 'react';
import {MenuItem} from "./MenuItem/MenuItem";
import {ProductsType} from "../../App/App";

export type ColdSnacksContentListPropsType = {
    tabNumber: number
    products: ProductsType[]
    quantityBuyProduct: number
    setQuantityBuyProduct: (newValue: number)=>void
}
export const ColdSnacksContentList = (props:ColdSnacksContentListPropsType) => {

    const nameSection = props.tabNumber === 1 ? 'ХОЛОДНЫЕ ЗАКУСКИ'
        : props.tabNumber === 2 ? 'ГОРЯЧИЕ ЗАКУСКИ' : props.tabNumber === 3 ? 'МЯСНЫЕ БЛЮДА'
                : props.tabNumber === 4 ? 'СУПЫ' : props.tabNumber === 5 ? 'РЫБНЫЕ БЛЮДА'
                : props.tabNumber === 6 ? 'ГРИЛЬ МЕНЮ' : props.tabNumber === 7 ? 'ФИРМЕННЫЕ БЛЮДА' : props.tabNumber === 8 ? 'НАПИТКИ' : ''

    return (
        <section className='relative mx-auto mb-[50px]'>
            <section className='mx-auto ml-[20px] tablet-lg:ml-[114px] pb-[50px] border-b-[1px] last:border-b-0 border-b-white border-opacity-[0.1]'>
            <p className='mt-[50px] mb-[35px] pl-[20px] border-l-[4px] border-l-green font-mulish font-bold text-[20px] mobile:text-[28px] tablet-lg:text-[32px] text-white'>{nameSection}</p>
                <div className='flex gap-[20px] cursor-pointer flex-wrap mx-auto'>
                    {props.products.map(el => (<MenuItem quantityBuyProduct={props.quantityBuyProduct} setQuantityBuyProduct={props.setQuantityBuyProduct} key={el.id} product={el}/>))}
                </div>
            </section>
        </section>
    );
};