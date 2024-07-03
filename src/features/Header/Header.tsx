import React from 'react';

import logo from './images/logo.svg'
import locationSearch from './images/Location.svg'
import search from './images/Search.svg'
import calling from './images/Calling.svg'
import buy from './images/Buy.svg'
import line from './images/Line.svg'
import {AddressInput} from "./AddressInput/AddressInput";
import {Link} from "react-router-dom";


export const Header = () => {
    return (
        <header className='max-w-[1272px] h-[155px] tablet-md:h-[99px] pt-[23px] mx-0 tablet-md:mx-[15px] desktop-1xl:mx-auto '>
            <div className='hidden tablet-md:flex tablet-md:flex-nowrap tablet-lg:flex-wrap justify-between items-center'>
                <Link to='/home'>
                    <img className='w-[100px] h-[25px] cursor-pointer' src={logo} alt="logo"/>
                </Link>

                <div className='flex w-max desktop:w-[763px] gap-[30px]'>
                    <AddressInput />
                    <div className='min-w-[178px] flex items-center'>
                        <div className='relative min-w-[32px] h-[32px] mr-[10px] bg-custom-gradient rounded-full'>
                            <img className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-[12px] h-[12px]' src={calling} alt="tel"/>
                        </div>
                        <div className='basis-[136px] h-[39px]'>
                            <span className='baseTextStyle block text-xs text-base-white'>Контакты:</span>
                            <a className='font-mulish font-bold text-base text-white' href="tel:+79175105759">+7 (917) 510-57-59</a>
                        </div>
                    </div>
                </div>

                <div className='cursor-pointer flex items-center max-w-[149px] h-[52px] pl-[24px] pr-[13px] rounded-[10px] bg-custom-gradient'>
                    <a className='basis-[56px] h-[17px] font-mulish font-semibold text-base text-white' href="#" target="_blank">Корзина</a>
                    <img className='max-w-[38px] bg-white opacity-[30%] my-[7px] mr-[12px] ml-[20px]' src={line} alt="line"/>
                        <div className='relative right-[3px] min-w-[24px] h-[24px] bg-white rounded-full'>
                            <span className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] font-mulish font-semibold text-xs text-[#403C3B]'>4</span>
                        </div>
                </div>
            </div>

            <div className='mx-[15px] block tablet-md:hidden'>
                <div className='w-full flex items-center justify-between mb-[9px]'>
                    <div className="w-[37px] h-[38px] pl-[11px] pt-[3px] cursor-pointer">
                        <div className="w-[25px] h-[3px] ml-[6px] mb-[4px] bg-[#65906C] rounded-full"></div>
                        <div className="w-[25px] h-[3px] ml-[6px] mb-[4px] bg-[#65906C] rounded-full"></div>
                        <div className="w-[25px] h-[3px] ml-[6px] mb-[4px] bg-[#65906C] rounded-full"></div>
                        <a className="font-mulish font-bold text-xs text-white" href="#">МЕНЮ</a>
                    </div>

                        <img className='cursor-pointer' src={logo} alt="logo"/>

                    <div className='cursor-pointer max-w-[62px] h-[56px] bg-custom-gradient rounded-[10px]'>
                        <img className='w-[24px] h-[24px] mx-[19px] mb-[3px] pt-[9px]' src={buy} alt="buy" />
                            <a className='mt-[1px] mr-[7px] mb-[9px] ml-[8px] border-t border-t-1 border-t-white border-opacity-[30%] font-mulish font-semibold text-xs text-white' href="#" target="_blank">корзина</a>
                    </div>
                </div>

                <div className="w-full">
                    <div>
                        <form className='relative'>
                            <input
                                className='w-full h-[52px] px-[48px] bg-[#504B4A] rounded-[10px] border-none text-base-white baseTextStyle text-md placeholder:text-[#CFCFCF]'
                                type="text" placeholder="Введите адрес доставки"/>
                            <img className='absolute left-[14px] top-[14px]' src={locationSearch}
                                 alt="search-location"/>
                            <img className='absolute right-[17px] top-[14px] cursor-pointer' src={search} alt="search"/>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
};