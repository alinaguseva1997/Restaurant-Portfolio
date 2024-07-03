import React from 'react';
import arrowBack from './images/Arrow-back.svg'
import arrowBackGreen from './images/Arrow-green-mobile.svg'
import {Link, useParams} from "react-router-dom";
import {ProductArrayType, ProductsType} from "../../App/App";
import {MenuItem} from "../MenuContentList/MenuItem/MenuItem";
import {ProductCardItemInfo} from "./ProductCardItemInfo/ProductCardItemInfo";

export type CardProductPropsType = {
    dopProductData: ProductsType[]
    productList: ProductArrayType
    quantityBuyProduct: number
    setQuantityBuyProduct: (newValue: number)=>void
}
export const CardProduct = (props:CardProductPropsType) => {

    const {productId} = useParams()

    return (
        <div className='relative pb-[1%] tablet-md:pb-[15%]'>
        <section className="mx-0 tablet-lg:mx-[15px] desktop-1xl:mx-auto relative flex flex-col pt-[30px] tablet-mg:pt-[40px] pb-[40px] border-b-[1px] border-b-white border-opacity-[0.1]">
            <div className="max-w-[1210px] mx-auto">
                <div className="hidden mx-[15px] tablet-lg:mx-0 tablet:block">
                    <Link to='/home'>
                        <a className="inline-block relative top-[7px] mr-[10px] w-[26px] h-[26px] rounded-full bg-custom-gradient hover:bg-light-green"
                           href="#">
                            <img className="absolute top-[33%] left-[24%] max-w-[12px] transform rotate-[-90deg]"
                                 src={arrowBack} alt="come-back"/>
                        </a>
                        <a href="#"
                           className="inline-block mb-[28px] font-mulish font-semibold text-[16px] text-white hover:opacity-[0.7]">Вернуться назад</a>
                    </Link>
                </div>

                <div className="block tablet:hidden absolute top-[8px] left-[24px] w-[37px] h-[37px] bg-white rounded-full cursor-pointer hover:bg-opacity-[0.7]">
                    <Link to='/home'>
                    <a className="absolute top-[30%] left-[36%] hover:bg-opacity-[0.7]" href="#">
                        <img src={arrowBackGreen}
                             alt="arrow-mobile"/>
                    </a>
                    </Link>
                </div>
                {props.productList['coldSnacks'].map(card => card.id === productId && <ProductCardItemInfo title={card.title} description={card.description} price={card.price} weight={card.weight} />)}
            </div>
        </section>

            <section className="pl-0 tablet-lg:pl-[15px] desktop-1xl:pl-[40px] mb-[71px]">
                <h2 className="font-mulish font-bold text-[20px] tablet-md:text-[32px] text-white mt-[35px] tablet-md:mt-[50px] mb-[40px] tablet-md:mb-[50px] mr-0 tablet-md:mr-[46px] pl-[10px] tablet-md:pl-[19px] border-l-[4px] border-l-green ml-[15px] tablet-md:ml-[60px]">С ЭТИМ ТОВАРОМ ПОКУПАЮТ</h2>
                <div className='flex flex-wrap gap-[20px] justify-center tablet-md:justify-stretch px-[15px] desktop-2xl:px-0'>
                    {props.dopProductData.map(card => <div key={card.id}><MenuItem quantityBuyProduct={props.quantityBuyProduct} setQuantityBuyProduct={props.setQuantityBuyProduct} product={card} /></div>)}
                </div>
            </section>
        </div>
);
};

