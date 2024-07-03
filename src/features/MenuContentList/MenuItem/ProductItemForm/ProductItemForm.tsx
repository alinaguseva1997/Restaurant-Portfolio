import React, {useRef} from "react";

import minus from "./images/form-minus.svg";
import plus from "./images/form-plus.svg";

export type ProductItemFormPropsType = {
    price: string
    setQuantity: (newValue:number)=>void
    setIsActive: (newValue:boolean)=>void
    quantity: number
}
export const ProductItemForm = (props: ProductItemFormPropsType) => {
    const sumPrice = useRef<HTMLSpanElement>(null);

    const onClickIncHandler = () => {
        props.setQuantity(props.quantity + 1)
        incrementPrice()
    }
    const onClickDecHandler = () => {
        if (props.quantity > 1) {
            props.setQuantity(props.quantity - 1)
        }
        decrementPrice()
    }

    const incrementPrice = () => {
        let valuePrice = props.price
        let valuePriceValid = +valuePrice.replace(" ₽", "")
        let newPriceResult = Number(sumPrice.current!.textContent!.replace(" ₽", "")) + valuePriceValid
        sumPrice.current!.textContent = `${String(newPriceResult)} ₽`
    }
    const decrementPrice = () => {
        let valuePrice = props.price
        let valuePriceValid = +valuePrice.replace(" ₽", "")
        let newPriceResult = Number(sumPrice.current!.textContent!.replace(" ₽", "")) - valuePriceValid
        sumPrice.current!.textContent = `${String(newPriceResult)} ₽`
        if(sumPrice.current!.textContent === '0 ₽') {
            props.setIsActive(false)
        }
    }
    return (
        <>
            {props.quantity !== 0 ?
                <form className="w-full flex items-center justify-between pt-[13px] pb-[14px]"
                      action="#">
                    <div onClick={onClickDecHandler}
                         className='relative cursor-pointer w-[50px] h-[48px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green'>
                        <img src={minus} alt="minus" className="absolute top-[50%] left-[33%]"/>
                    </div>
                    <span ref={sumPrice}
                          className="cold-snack-flex-1 text-white cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white--form text-center priceWithRuble">{props.price}</span>
                    <div onClick={onClickIncHandler}
                         className='relative cursor-pointer w-[50px] h-[48px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green'>
                        <img src={plus} alt="plus" className="absolute top-[35%] left-[33%]"/>
                    </div>
                </form>
                : <></>
            }
        </>

    )
}