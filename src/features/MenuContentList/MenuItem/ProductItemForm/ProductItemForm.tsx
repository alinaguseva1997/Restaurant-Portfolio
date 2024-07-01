import React from "react";

import minus from "./images/form-minus.svg";
import plus from "./images/form-plus.svg";

export type ProductItemFormPropsType = {
    price: string
}
export const ProductItemForm = (props: ProductItemFormPropsType) => {
    return (
        <form className="w-full flex items-center justify-between pt-[13px] pb-[14px]"
              action="#">
            <div
                className='relative cursor-pointer w-[50px] h-[48px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green'>
                <img src={minus} alt="minus" className="absolute top-[50%] left-[33%]"/>
            </div>
            <span
                className="cold-snack-flex-1 text-white cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white--form text-center">{props.price}</span>
            <div
                className='relative cursor-pointer w-[50px] h-[48px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green'>
                <img src={plus} alt="plus" className="absolute top-[35%] left-[33%]"/>
            </div>
        </form>
    )
}