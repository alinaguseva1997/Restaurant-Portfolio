import React from 'react';

import errorImg from './images/errorImg.avif'
export const Error404Page = () => {
    return (
        <div className='bg-white'>
            <img className='mx-auto' src={errorImg} alt="error"/>
            <div className='errorImg'>
                <button className='cursor-pointer py-[14px] px-[19px] rounded-[10px] border-none bg-green font-mulish font-semibold text-base text-white hover:shadow-cardItemHover hover:bg-light-green active:bg-opacity-[0.8]'>Вернуться на главную страницу</button>
            </div>
        </div>
    );
};

