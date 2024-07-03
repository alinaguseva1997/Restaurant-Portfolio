import locationSearch from "./images/Location.svg";
import search from "./images/Search.svg";
import React from "react";

export const AddressInput = () => {

    return (
            <form className='relative'>
                <input
                    className='w-full h-[52px] px-[48px] bg-[#504B4A] rounded-[10px] border-none text-base-white baseTextStyle text-md placeholder:text-[#CFCFCF]'
                    type="text" placeholder="Введите адрес доставки" />
                <img className='absolute left-[14px] top-[14px]' src={locationSearch} alt="search-location"/>
                <img className='absolute right-[17px] top-[14px] cursor-pointer' src={search} alt="search"/>
            </form>
    )
}