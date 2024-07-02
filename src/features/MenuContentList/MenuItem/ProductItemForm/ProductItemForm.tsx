import React, {useRef, useState} from "react";

import minus from "./images/form-minus.svg";
import plus from "./images/form-plus.svg";

export type ProductItemFormPropsType = {
    price: string
    setQuantity: (newValue:number)=>void
    quantity: number
}
export const ProductItemForm = (props: ProductItemFormPropsType) => {
    const sumPrice = useRef<HTMLSpanElement>(null);
    const onClickHandler = () => {
        props.setQuantity(props.quantity + 1)
        let newPrice = Number(props.price) + Number(props.price)
        let newPriceResult = newPrice * props.quantity
        sumPrice.current!.textContent = `${String(newPriceResult)} ₽`
    }

    return (
        <form className="w-full flex items-center justify-between pt-[13px] pb-[14px]"
              action="#">
            <div
                className='relative cursor-pointer w-[50px] h-[48px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green'>
                <img src={minus} alt="minus" className="absolute top-[50%] left-[33%]"/>
            </div>
            <span ref={sumPrice}
                className="cold-snack-flex-1 text-white cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white--form text-center">{props.price} ₽</span>
            <div onClick={onClickHandler}
                className='relative cursor-pointer w-[50px] h-[48px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green'>
                <img src={plus} alt="plus" className="absolute top-[35%] left-[33%]"/>
            </div>
        </form>
    )
}