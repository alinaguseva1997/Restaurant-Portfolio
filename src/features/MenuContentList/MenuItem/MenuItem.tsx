import React from 'react';

import dich1 from './images/dich1.jpg'
// import dich2 from './images/dich2.jpg'
// import dich3 from './images/dich3.jpg'
// import dich4 from './images/dich4.jpg'
import BuyIcon from './images/Buy.svg'
// import minus from './images/form-minus.svg'
// import plus from './images/form-plus.svg'

export const MenuItem = () => {
    return (
        <>
            <div className="pr-[20px] tablet-lg:pr-0 w-full tablet-md:w-[350px] tablet-lg:w-[400px] relative flex flex-col h-full hover:shadow-cardItem">
                <img src={dich1} alt="dich" className="rounded-t-[10px]"/>
                <div
                    className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">
                    <div className="flex w-full items-center justify-between">
                        <p className="flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] self-baseline text-white last:mb-0">Ягненок</p>
                        <span className="mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">Вес: 225 г</span>
                    </div>
                    <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">Фаршированный
                        гречневой кашей, курагой, апельсином
                        и зеленым
                        яблоком
                    </p>
                    <div className="flex w-full items-center justify-between">
                                    <span
                                        className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white">620 ₽</span>

                        <form className="relative" action="#">
                            <input
                                className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover hover:bg-light-green active:bg-opacity-[0.5]"
                                type="button" value="В корзину"/>
                            <img className="absolute top-[12px] right-[16px]"
                                 src={BuyIcon}
                                 alt="buy"/>
                        </form>

                    </div>
                </div>
            </div>

            {/*<div className="w-[400px] relative flex flex-col h-full hover:shadow-cardItem">*/}
            {/*    <img src={dich2} alt="dich"*/}
            {/*         className="rounded-t-[10px] cold-snack-dich__img--sum"/>*/}
            {/*    <div*/}
            {/*        className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*            <p className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white self-baseline">Индейка</p>*/}
            {/*            <span*/}
            {/*                className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">Вес: 225 г</span>*/}
            {/*        </div>*/}
            {/*        <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">Фаршированный*/}
            {/*            гречневой кашей, курагой, апельсином*/}
            {/*            и зеленым*/}
            {/*            яблоком*/}
            {/*        </p>*/}

            {/*        <form className="hidden relative active:basis-[100%] active:flex active:justify-center"*/}
            {/*              action="#">*/}
            {/*            <input*/}
            {/*                className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green"*/}
            {/*                type="button" value="В корзину"/>*/}
            {/*            <img className="cursor-pointer absolute top-[12px] right-[16px]"*/}
            {/*                 src={BuyIcon}*/}
            {/*                 alt="buy"/>*/}
            {/*        </form>*/}

            {/*        /!*при клике на корзину*!/*/}
            {/*        <form className="w-full flex items-center justify-between pt-[13px] pb-[14px]"*/}
            {/*              action="#">*/}
            {/*            <div*/}
            {/*                className='relative cursor-pointer w-[50px] h-[48px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green'>*/}
            {/*                <img src={minus} alt="minus" className="absolute top-[50%] left-[33%]"/>*/}
            {/*            </div>*/}
            {/*            <span*/}
            {/*                className="cold-snack-flex-1 text-white cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white--form text-center">450 ₽</span>*/}
            {/*            <div*/}
            {/*                className='relative cursor-pointer w-[50px] h-[48px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green'>*/}
            {/*                <img src={plus} alt="plus" className="absolute top-[35%] left-[33%]"/>*/}
            {/*            </div>*/}
            {/*        </form>*/}


            {/*    </div>*/}
            {/*    <div className="absolute z-[1] right-[-15px] top-[-15px] w-[50px] h-[50px] rounded-full bg-white-green">*/}
            {/*        <span*/}
            {/*            className="absolute top-[13px] left-[19px] font-mulish font-bold text-[20px] text-white">3</span>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="w-[400px] relative flex flex-col h-full hover:shadow-cardItem">*/}
            {/*    <img src={dich3} alt="dich" className="rounded-t-[10px]"/>*/}
            {/*    <div*/}
            {/*        className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*            <p className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white self-baseline">Гусь</p>*/}
            {/*            <span*/}
            {/*                className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">Вес: 225 г</span>*/}
            {/*        </div>*/}
            {/*        <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">Фаршированный*/}
            {/*            яблоками</p>*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*                        <span*/}
            {/*                            className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white">7900 ₽</span>*/}
            {/*            <form className="relative active:basis-[100%] active:flex active:justify-center"*/}
            {/*                  action="#">*/}
            {/*                <input*/}
            {/*                    className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green"*/}
            {/*                    type="button" value="В корзину"/>*/}
            {/*                <img className="cursor-pointer absolute top-[12px] right-[16px]"*/}
            {/*                     src={BuyIcon}*/}
            {/*                     alt="buy"/>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="w-[400px] relative flex flex-col h-full hover:shadow-cardItem">*/}
            {/*    <img src={dich4} alt="dich" className="rounded-t-[10px]"/>*/}
            {/*    <div*/}
            {/*        className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*            <p className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white self-baseline">Утка</p>*/}
            {/*            <span*/}
            {/*                className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">Вес: 225 г</span>*/}
            {/*        </div>*/}
            {/*        <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">Фаршированная*/}
            {/*            рисом, курагой и айвой</p>*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*                        <span*/}
            {/*                            className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white">3230 ₽</span>*/}
            {/*            <form className="relative active:basis-[100%] active:flex active:justify-center"*/}
            {/*                  action="#">*/}
            {/*                <input*/}
            {/*                    className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green"*/}
            {/*                    type="button" value="В корзину"/>*/}
            {/*                <img className="cursor-pointer absolute top-[12px] right-[16px]"*/}
            {/*                     src={BuyIcon}*/}
            {/*                     alt="buy"/>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="w-[400px] relative flex flex-col h-full hover:shadow-cardItem">*/}
            {/*    <img src={dich1} alt="dich" className="rounded-t-[10px]"/>*/}
            {/*    <div*/}
            {/*        className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*            <p className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white self-baseline">Ягненок</p>*/}
            {/*            <span*/}
            {/*                className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">Вес: 225 г</span>*/}
            {/*        </div>*/}
            {/*        <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">Фаршированный*/}
            {/*            гречневой кашей, курагой, апельсином*/}
            {/*            и зеленым*/}
            {/*            яблоком*/}
            {/*        </p>*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*                        <span*/}
            {/*                            className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white">620 ₽</span>*/}
            {/*            <form className="relative active:basis-[100%] active:flex active:justify-center"*/}
            {/*                  action="#">*/}
            {/*                <input*/}
            {/*                    className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green"*/}
            {/*                    type="button" value="В корзину"/>*/}
            {/*                <img className="cursor-pointer absolute top-[12px] right-[16px]"*/}
            {/*                     src={BuyIcon}*/}
            {/*                     alt="buy"/>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="w-[400px] relative flex flex-col h-full hover:shadow-cardItem">*/}
            {/*    <img src={dich2} alt="dich" className="rounded-t-[10px]"/>*/}
            {/*    <div*/}
            {/*        className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*            <p className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white self-baseline">Ягненок</p>*/}
            {/*            <span*/}
            {/*                className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">Вес: 225 г</span>*/}
            {/*        </div>*/}
            {/*        <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">Фаршированный*/}
            {/*            гречневой кашей, курагой, апельсином*/}
            {/*            и зеленым*/}
            {/*            яблоком*/}
            {/*        </p>*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*                        <span*/}
            {/*                            className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white">620 ₽</span>*/}
            {/*            <form className="relative active:basis-[100%] active:flex active:justify-center"*/}
            {/*                  action="#">*/}
            {/*                <input*/}
            {/*                    className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green"*/}
            {/*                    type="button" value="В корзину"/>*/}
            {/*                <img className="cursor-pointer absolute top-[12px] right-[16px]"*/}
            {/*                     src={BuyIcon}*/}
            {/*                     alt="buy"/>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="w-[400px] relative flex flex-col h-full hover:shadow-cardItem">*/}
            {/*    <img src={dich3} alt="dich" className="rounded-t-[10px]"/>*/}
            {/*    <div*/}
            {/*        className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*            <p className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white self-baseline">Гусь</p>*/}
            {/*            <span*/}
            {/*                className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">Вес: 225 г</span>*/}
            {/*        </div>*/}
            {/*        <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">Фаршированный*/}
            {/*            яблоками</p>*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*                        <span*/}
            {/*                            className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white">7900 ₽</span>*/}
            {/*            <form className="relative active:basis-[100%] active:flex active:justify-center"*/}
            {/*                  action="#">*/}
            {/*                <input*/}
            {/*                    className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green"*/}
            {/*                    type="button" value="В корзину"/>*/}
            {/*                <img className="cursor-pointer absolute top-[12px] right-[16px]"*/}
            {/*                     src={BuyIcon}*/}
            {/*                     alt="buy"/>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="w-[400px] relative flex flex-col h-full hover:shadow-cardItem">*/}
            {/*    <img src={dich4} alt="dich" className="rounded-t-[10px]"/>*/}
            {/*    <div*/}
            {/*        className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*            <p className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white self-baseline">Утка</p>*/}
            {/*            <span*/}
            {/*                className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">Вес: 225 г</span>*/}
            {/*        </div>*/}
            {/*        <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">Фаршированная*/}
            {/*            рисом, курагой и айвой</p>*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*                        <span*/}
            {/*                            className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white">3230 ₽</span>*/}
            {/*            <form className="relative active:basis-[100%] active:flex active:justify-center"*/}
            {/*                  action="#">*/}
            {/*                <input*/}
            {/*                    className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green"*/}
            {/*                    type="button" value="В корзину"/>*/}
            {/*                <img className="cursor-pointer absolute top-[12px] right-[16px]"*/}
            {/*                     src={BuyIcon}*/}
            {/*                     alt="buy"/>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="w-[400px] relative flex flex-col h-full hover:shadow-cardItem">*/}
            {/*    <img src={dich4} alt="dich" className="rounded-t-[10px]"/>*/}
            {/*    <div*/}
            {/*        className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*            <p className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white self-baseline">Утка</p>*/}
            {/*            <span*/}
            {/*                className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">Вес: 225 г</span>*/}
            {/*        </div>*/}
            {/*        <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">Фаршированная*/}
            {/*            рисом, курагой и айвой</p>*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*                        <span*/}
            {/*                            className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white">3230 ₽</span>*/}
            {/*            <form className="relative active:basis-[100%] active:flex active:justify-center"*/}
            {/*                  action="#">*/}
            {/*                <input*/}
            {/*                    className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green"*/}
            {/*                    type="button" value="В корзину"/>*/}
            {/*                <img className="cursor-pointer absolute top-[12px] right-[16px]"*/}
            {/*                     src={BuyIcon}*/}
            {/*                     alt="buy"/>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="w-[400px] relative flex flex-col h-full hover:shadow-cardItem">*/}
            {/*    <img src={dich1} alt="dich" className="rounded-t-[10px]"/>*/}
            {/*    <div*/}
            {/*        className="flex flex-wrap flex-1 rounded-b-[10px] pt-[15px] pr-[15px] pb-[18px] pl-[20px] bg-itemCard">*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*            <p className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white self-baseline">Ягненок</p>*/}
            {/*            <span*/}
            {/*                className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white self-baseline">Вес: 225 г</span>*/}
            {/*        </div>*/}
            {/*        <p className="cold-snack-mt-0 mb-[15px] baseTextStyle text-[13px] text-base-white">Фаршированный*/}
            {/*            гречневой кашей, курагой, апельсином*/}
            {/*            и зеленым*/}
            {/*            яблоком*/}
            {/*        </p>*/}
            {/*        <div className="flex w-full items-center justify-between">*/}
            {/*                        <span*/}
            {/*                            className="cold-snack-flex-1 flex-grow-0 flex-shrink-0 basis-1/2 mt-0 mb-[5px] font-mulish font-bold text-[22px] text-white">620 ₽</span>*/}
            {/*            <form className="relative active:basis-[100%] active:flex active:justify-center"*/}
            {/*                  action="#">*/}
            {/*                <input*/}
            {/*                    className="cursor-pointer pt-[13px] pr-[52px] pb-[14px] pl-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover active:bg-light-green"*/}
            {/*                    type="button" value="В корзину"/>*/}
            {/*                <img className="cursor-pointer absolute top-[12px] right-[16px]"*/}
            {/*                     src={BuyIcon}*/}
            {/*                     alt="buy"/>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>

    );
};

