import line from "./images/Line.svg";
import React from "react";
import buy from "./images/Buy.svg";

export  type BasketPropsType = {
    value: number
}
export const Basket = (props: BasketPropsType) => {

    return (
        <div
            className='cursor-pointer flex items-center max-w-[149px] h-[52px] pl-[24px] pr-[13px] rounded-[10px] bg-custom-gradient'>
            <a className='basis-[56px] h-[17px] font-mulish font-semibold text-base text-white' href="#"
               target="_blank">Корзина</a>
            <img className='max-w-[38px] bg-white opacity-[30%] my-[7px] mr-[12px] ml-[20px]' src={line} alt="line"/>
             <img src={buy} alt="buy"/>
               {/*: <div className='relative right-[3px] min-w-[24px] h-[24px] bg-white rounded-full'>*/}
               {/*     <span*/}
               {/*     className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] font-mulish font-semibold text-xs text-[#403C3B]'>{props.value}</span>*/}
               {/*  </div>*/}
                </div>
                )
            }