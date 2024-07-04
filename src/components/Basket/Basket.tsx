import line from "./images/Line.svg";
import React from "react";
import buy from "./images/Buy.svg";

export const Basket = () => {
    return (
        <div
            className='cursor-pointer flex items-center max-w-[149px] h-[52px] pl-[24px] pr-[13px] rounded-[10px] bg-custom-gradient'>
            <a className='basis-[56px] h-[17px] font-mulish font-semibold text-base text-white' href="#">Корзина</a>
            <img className='max-w-[38px] bg-white opacity-[30%] my-[7px] mr-[12px] ml-[20px]' src={line} alt="line"/>
            <img src={buy} alt="buy"/>
        </div>
    )
}