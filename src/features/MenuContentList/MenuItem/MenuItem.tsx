import React, {useState} from 'react';

import dich1 from './images/dich1.jpg'
import BuyIcon from './images/Buy.svg'
import {ProductsType} from "../../../App/App";
import {ProductItemForm} from "./ProductItemForm/ProductItemForm";
import { Link } from 'react-router-dom';

export type MenuItemPropsType ={
    product: ProductsType
    quantityBuyProduct: number
    setQuantityBuyProduct: (newValue: number)=>void
}

export const MenuItem = (props:MenuItemPropsType) => {

    const [isActive, setIsActive] = useState(false)

    const onClickHandler = () => {
        setIsActive(true)
    }

    return (
        <>
            <div
                className="pr-[20px] tablet-lg:pr-0 w-full h-auto tablet-md:h-[459px] tablet-md:w-[350px] tablet-lg:w-[400px] relative flex flex-col hover:shadow-cardItem">
                <Link to={`/product-card/${props.product.id}`}>
                    <img src={dich1} alt="dich" className="w-full rounded-t-[10px]"/>
                </Link>
                <div
                    className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">
                    <div className="flex w-full items-center justify-between">
                        <p className="flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] self-baseline text-white last:mb-0">{props.product.title}</p>
                        <span
                            className="mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">{props.product.weight}</span>
                    </div>
                    <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">{props.product.description}</p>
                    <div
                        className={`${isActive ? 'hidden' : 'flex w-full items-center justify-between'}`}>
                                    <span
                                        className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white">{props.product.price}</span>

                        <form onClick={onClickHandler} className="relative" action="#">
                            <input
                                className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover hover:bg-light-green active:bg-opacity-[0.5]"
                                type="button" value="В корзину"/>
                            <img className="absolute top-[12px] right-[16px]"
                                 src={BuyIcon}
                                 alt="buy"/>
                        </form>

                    </div>
                        {isActive && <ProductItemForm setIsActive={setIsActive} setQuantity={props.setQuantityBuyProduct} quantity={props.quantityBuyProduct} price={props.product.price}/>}
                </div>

                {isActive && props.quantityBuyProduct !==0 ?
                <div className="absolute z-[1] right-[-15px] top-[-15px] w-[50px] h-[50px] rounded-full bg-white-green">
                    <span className="absolute top-[13px] left-[19px] font-mulish font-bold text-[20px] text-white">{props.quantityBuyProduct}</span>
                </div>
                : <></>}
            </div>
        </>

    );
};

