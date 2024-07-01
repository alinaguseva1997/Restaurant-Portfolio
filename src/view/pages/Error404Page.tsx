import React from 'react';

import errorImg from './images/errorImg.avif'
import {NavLink} from "react-router-dom";
export const Error404Page = () => {
    return (
        <div className='bg-white pt-[5%]'>
            <img className='mx-auto pb-[3%]' src={errorImg} alt="error"/>
            <div className='errorImg'>
                <button className='cursor-pointer py-[14px] px-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover hover:bg-light-green active:bg-opacity-[0.8]'>
                    <NavLink to='/'>Вернуться на главную страницу</NavLink>
                </button>
            </div>
        </div>
    );
};

