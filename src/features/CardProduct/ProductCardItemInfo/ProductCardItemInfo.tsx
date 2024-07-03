import dich from "../images/card-dich.jpg";
import line from "../images/Line.svg";
import basket from "../images/basket.svg";
import React from "react";

export type ProductCardItemInfoPropsType = {
    title: string
    description: string
    price: string
    weight: string
}
export const ProductCardItemInfo = (props: ProductCardItemInfoPropsType) => {
    return (
        <div className="flex flex-col mx-[15px] tablet-lg:mx-0 tablet-lg:flex-row">
            <img className="w-full tablet-lg:w-[510px] desktop:w-[599px] rounded-l-0 tablet-lg:rounded-l-[10px]"
                 src={dich} alt="dich"/>
            <div className="pt-[25px] tablet-lg:pt-[38px] pb-[21px] rounded-r-0 tablet-lg:rounded-r-[10px] bg-itemCard">
                <h1 className="text-center tablet-lg:text-left mb-[6px] tablet-lg:mb-[5px] ml-0 tablet-lg:ml-[50px] font-mulish font-bold text-[25px] text-white">{props.title}</h1>
                <p className="block mr-[15px] tablet-lg:mr-[151px] mb-[15px] tablet-lg:mb-[78px] desktop:mb-[93px] desktop-1xl:mb-[113px] ml-[15px] tablet-lg:ml-[50px] baseTextStyle text-base text-base-white text-center tablet-lg:text-left">{props.description}</p>
                <span
                    className="max-w-max block mb-[22px] mx-auto tablet-lg:ml-[50px] tablet-lg:mr-0 baseTextStyle text-base text-white">{props.weight}</span>
                <div className="mb-[30px] mx-auto tablet-lg:ml-[50px] flex gap-[25px] w-max items-center relative">
                    <form action="#">
                        <input
                            className="cursor-pointer rounded-[10px] border-none pt-[16px] pr-[69px] pb-[17px] pl-[20px] font-mulish font-semibold text-base text-white bg-custom-gradient hover:bg-light-green hover:shadow-cardItemHover"
                            type="button" value="Корзина"/>
                        <img className="absolute top-[7px] left-[101px]" src={line} alt="line-form"/>
                        <img className="absolute top-[15px] left-[115px]" src={basket} alt="basket"/>
                    </form>
                    <span className="font-mulish font-bold text-[25px] text-white">{props.price}</span>
                </div>
                <div>
                    <div
                        className="flex pl-[20px] tablet-lg:pl-[50px] pr-[50px] desktop:pr-[192px] pb-[5px] border-b-[1px] border-b-white border-opacity-[0.1] justify-between">
                        <span className="font-mulish font-extralight text-xs text-white">Белки</span>
                        <span className="font-mulish font-extralight text-xs text-white relative left-[3px]">Жиры</span>
                        <span
                            className="font-mulish font-extralight text-xs text-white relative left-[3px]">Углеводы</span>
                        <span
                            className="font-mulish font-extralight text-xs text-white relative left-[-10px]">Ккал</span>
                        <span className="font-mulish font-extralight text-xs text-white relative left-[-5px]">Вес</span>
                    </div>
                    <div
                        className="flex pt-[5px] pr-[47px] desktop:pr-[188px] pl-[20px] tablet-lg:pl-[50px] justify-between">
                        <span className="font-mulish font-medium text-xs text-white ">17.23</span>
                        <span className="font-mulish font-medium text-xs text-white ">7.63</span>
                        <span className="font-mulish font-medium text-xs text-white ">22.35</span>
                        <span className="font-mulish font-medium text-xs text-white ">234</span>
                        <span className="font-mulish font-medium text-xs text-white ">210 г</span>
                    </div>
                </div>
            </div>
        </div>
    )
}