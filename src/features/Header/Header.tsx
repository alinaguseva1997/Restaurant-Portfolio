import React from 'react';

import logo from './images/logo.svg'
import calling from './images/Calling.svg'
import buy from './images/Buy.svg'
import {AddressInput} from "../../components/AddressInput/AddressInput";
import {Link} from "react-router-dom";
import {Basket} from "../../components/Basket/Basket";

export const Header = () => {
    return (
        <header className='max-w-[1272px] h-[155px] tablet-md:h-[99px] pt-[23px] mx-0 tablet-md:mx-[15px] desktop-1xl:mx-auto '>
            <div className='hidden tablet-md:flex tablet-md:flex-nowrap tablet-lg:flex-wrap justify-between items-center'>
                <Link to='/home'>
                    <img className='w-[100px] h-[25px] cursor-pointer' src={logo} alt="logo"/>
                </Link>

                <div className='flex w-max desktop:w-[763px] gap-[30px]'>
                    <div className='flex-none tablet-lg:flex-1'>
                        <AddressInput />
                    </div>
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
                <Basket/>
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
                        <AddressInput />
                    </div>
                </div>
            </div>
        </header>
    );
};

