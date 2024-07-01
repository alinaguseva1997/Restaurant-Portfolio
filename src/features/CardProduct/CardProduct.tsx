import React from 'react';

import dich1 from './images/dich1.jpg'
import dich from './images/card-dich.jpg'
import line from './images/Line.svg'
import buy from './images/Buy.svg'
import basket from './images/basket.svg'
import arrowBack from './images/Arrow-back.svg'
import arrowBackGreen from './images/Arrow-green-mobile.svg'

export const CardProduct = () => {
    return (
        <div className='relative pb-[1%] tablet-md:pb-[15%]'>
        <section className="mx-0 tablet-lg:mx-[15px] desktop-1xl:mx-auto relative flex flex-col pt-[30px] tablet-mg:pt-[40px] pb-[40px] border-b-[1px] border-b-white border-opacity-[0.1]">
            <div className="max-w-[1210px] mx-auto">
                <div className="hidden mx-[15px] tablet-lg:mx-0 tablet:block cursor-pointer">
                    <a className="inline-block relative top-[7px] mr-[10px] w-[26px] h-[26px] rounded-full bg-custom-gradient hover:bg-light-green" href="#">
                        <img className="absolute top-[33%] left-[24%] max-w-[12px] transform rotate-[-90deg]" src={arrowBack} alt="come-back"/>
                    </a>
                    <a href="#" className="inline-block mb-[28px] font-mulish font-semibold text-[16px] text-white hover:opacity-[0.7]">Вернуться назад</a>
                </div>

                <div className="block tablet:hidden absolute top-[8px] left-[24px] w-[37px] h-[37px] bg-white rounded-full cursor-pointer hover:bg-opacity-[0.7]">
                    <a className="absolute top-[30%] left-[36%] hover:bg-opacity-[0.7]" href="#">
                        <img src={arrowBackGreen}
                             alt="arrow-mobile"/>
                    </a>
                </div>

                <div className="flex flex-col mx-[15px] tablet-lg:mx-0 tablet-lg:flex-row">
                    <img className="w-full tablet-lg:w-[510px] desktop:w-[599px] rounded-l-0 tablet-lg:rounded-l-[10px]" src={dich} alt="dich"/>
                    <div className="pt-[25px] tablet-lg:pt-[38px] pb-[21px] rounded-r-0 tablet-lg:rounded-r-[10px] bg-itemCard">
                        <h1 className="text-center tablet-lg:text-left mb-[6px] tablet-lg:mb-[5px] ml-0 tablet-lg:ml-[50px] font-mulish font-bold text-[25px] text-white">Ягненок</h1>
                        <p className="block mr-[15px] tablet-lg:mr-[151px] mb-[15px] tablet-lg:mb-[78px] desktop:mb-[93px] desktop-1xl:mb-[113px] ml-[15px] tablet-lg:ml-[50px] baseTextStyle text-base text-base-white text-center tablet-lg:text-left">помидор, сыр фета, масло подсолнечное, капуста
                            пекинская, перец сладкий
                            красный, огурцы, оливки без косточек</p>
                        <span className="max-w-max block mb-[22px] mx-auto tablet-lg:ml-[50px] tablet-lg:mr-0 baseTextStyle text-base text-white">Вес: 210 г</span>
                        <div className="mb-[30px] mx-auto tablet-lg:ml-[50px] flex gap-[25px] w-max items-center relative">
                            <form action="#">
                                <input className="cursor-pointer rounded-[10px] border-none pt-[16px] pr-[69px] pb-[17px] pl-[20px] font-mulish font-semibold text-base text-white bg-custom-gradient hover:bg-light-green hover:shadow-cardItemHover" type="button" value="Корзина"/>
                                <img className="absolute top-[7px] left-[101px]" src={line} alt="line-form"/>
                                <img className="absolute top-[15px] left-[115px]" src={basket} alt="basket"/>
                            </form>
                            <span className="font-mulish font-bold text-[25px] text-white">259 ₽</span>
                        </div>
                        <div>
                            <div className="flex pl-[20px] tablet-lg:pl-[50px] pr-[50px] desktop:pr-[192px] pb-[5px] border-b-[1px] border-b-white border-opacity-[0.1] justify-between">
                                <span className="font-mulish font-extralight text-xs text-white">Белки</span>
                                <span className="font-mulish font-extralight text-xs text-white relative left-[3px]">Жиры</span>
                                <span className="font-mulish font-extralight text-xs text-white relative left-[3px]">Углеводы</span>
                                <span className="font-mulish font-extralight text-xs text-white relative left-[-10px]">Ккал</span>
                                <span className="font-mulish font-extralight text-xs text-white relative left-[-5px]">Вес</span>
                            </div>
                            <div className="flex pt-[5px] pr-[47px] desktop:pr-[188px] pl-[20px] tablet-lg:pl-[50px] justify-between">
                                <span className="font-mulish font-medium text-xs text-white ">17.23</span>
                                <span className="font-mulish font-medium text-xs text-white ">7.63</span>
                                <span className="font-mulish font-medium text-xs text-white ">22.35</span>
                                <span className="font-mulish font-medium text-xs text-white ">234</span>
                                <span className="font-mulish font-medium text-xs text-white ">210 г</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <section className="pl-0 tablet-lg:pl-[15px] desktop-1xl:pl-[40px] mb-[71px]">
                <h2 className="font-mulish font-bold text-[20px] tablet-md:text-[32px] text-white mt-[35px] tablet-md:mt-[50px] mb-[40px] tablet-md:mb-[50px] mr-0 tablet-md:mr-[46px] pl-[10px] tablet-md:pl-[19px] border-l-[4px] border-l-green ml-[15px] tablet-md:ml-[60px]">С
                    ЭТИМ ТОВАРОМ ПОКУПАЮТ</h2>
                <div className='flex flex-wrap gap-[20px] justify-center tablet-md:justify-stretch px-[15px] desktop-2xl:px-0'>
                    <div className="w-full tablet-md:w-[350px] relative flex flex-col hover:shadow-cardItem h-max tablet-md:h-[406px]">
                        <a href="#" target="_blank">
                            <img src={dich1} alt="dich" className="rounded-t-[10px] cursor-pointer w-full"/>
                        </a>
                        <div
                            className="flex flex-wrap flex-1 bg-itemCard rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px]">
                            <div className="flex w-full justify-between">
                                <p className="flex flex-grow-1 flex-shrink-0 basis-1/2 font-mulish font-bold text-[22px] text-white self-center">Гусь</p>
                                <span
                                    className="baseTextStyle text-[13px] text-base-white self-center">Вес: 225 г</span>
                            </div>
                            <p className="baseTextStyle text-[13px] text-base-white self-center">Фаршированный
                                яблоками</p>
                            <div className="flex w-full justify-between pt-[15px]">
                                <span
                                    className="flex flex-grow-1 flex-shrink-0 basis-1/2 font-mulish font-bold text-[22px] text-white self-center">17 900 ₽</span>
                                <form className="relative" action="#">
                                    <input
                                        className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover hover:bg-light-green"
                                        type="button" value="В корзину"/>
                                    <img className="cursor-pointer absolute top-[12px] right-[16px]"
                                         src={buy}
                                         alt="buy"/>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="w-full tablet-md:w-[350px] relative flex flex-col hover:shadow-cardItem h-max tablet-md:h-[406px]">
                        <a href="#" target="_blank">
                            <img src={dich1} alt="dich" className="rounded-t-[10px] cursor-pointer w-full"/>
                        </a>
                        <div
                            className="flex flex-wrap flex-1 bg-itemCard rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px]">
                            <div className="flex w-full justify-between">
                                <p className="flex flex-grow-1 flex-shrink-0 basis-1/2 font-mulish font-bold text-[22px] text-white self-center">Утка</p>
                                <span
                                    className="baseTextStyle text-[13px] text-base-white self-center">Вес: 225 г</span>
                            </div>
                            <p className="baseTextStyle text-[13px] text-base-white self-center">Фаршированная рисом, курагой и айвой</p>
                            <div className="flex w-full justify-between pt-[15px]">
                                <span
                                    className="flex flex-grow-1 flex-shrink-0 basis-1/2 font-mulish font-bold text-[22px] text-white self-center">17 900 ₽</span>
                                <form className="relative" action="#">
                                    <input
                                        className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover hover:bg-light-green"
                                        type="button" value="В корзину"/>
                                    <img className="cursor-pointer absolute top-[12px] right-[16px]"
                                         src={buy}
                                         alt="buy"/>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="w-full tablet-md:w-[350px] relative flex flex-col hover:shadow-cardItem h-max tablet-md:h-[406px]">
                        <a href="#" target="_blank">
                            <img src={dich1} alt="dich" className="rounded-t-[10px] cursor-pointer w-full"/>
                        </a>
                        <div
                            className="flex flex-wrap flex-1 bg-itemCard rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px]">
                            <div className="flex w-full justify-between">
                                <p className="flex flex-grow-1 flex-shrink-0 basis-1/2 font-mulish font-bold text-[22px] text-white self-center">Ягненок</p>
                                <span
                                    className="baseTextStyle text-[13px] text-base-white self-center">Вес: 225 г</span>
                            </div>
                            <p className="baseTextStyle text-[13px] text-base-white self-center">Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком</p>
                            <div className="flex w-full justify-between pt-[15px]">
                                <span
                                    className="flex flex-grow-1 flex-shrink-0 basis-1/2 font-mulish font-bold text-[22px] text-white self-center">17 900 ₽</span>
                                <form className="relative" action="#">
                                    <input
                                        className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover hover:bg-light-green"
                                        type="button" value="В корзину"/>
                                    <img className="cursor-pointer absolute top-[12px] right-[16px]"
                                         src={buy}
                                         alt="buy"/>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="w-full tablet-md:w-[350px] relative flex flex-col hover:shadow-cardItem h-max tablet-md:h-[406px]">
                        <a href="#" target="_blank">
                            <img src={dich1} alt="dich" className="rounded-t-[10px] cursor-pointer w-full"/>
                        </a>
                        <div
                            className="flex flex-wrap flex-1 bg-itemCard rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px]">
                            <div className="flex w-full justify-between">
                                <p className="flex flex-grow-1 flex-shrink-0 basis-1/2 font-mulish font-bold text-[22px] text-white self-center">Индейка</p>
                                <span
                                    className="baseTextStyle text-[13px] text-base-white self-center">Вес: 225 г</span>
                            </div>
                            <p className="baseTextStyle text-[13px] text-base-white self-center">Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком</p>
                            <div className="flex w-full justify-between pt-[15px]">
                                <span
                                    className="flex flex-grow-1 flex-shrink-0 basis-1/2 font-mulish font-bold text-[22px] text-white self-center">17 900 ₽</span>
                                <form className="relative" action="#">
                                    <input
                                        className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover hover:bg-light-green"
                                        type="button" value="В корзину"/>
                                    <img className="cursor-pointer absolute top-[12px] right-[16px]"
                                         src={buy}
                                         alt="buy"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
);
};

