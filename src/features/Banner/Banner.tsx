import React from 'react';

import textBg from './images/text-bg.png'
import Rectangle20 from './images/Rectangle20.png'

export const Banner = () => {
    return (
        <section className="relative w-full h-[484px] bannerImg bg-no-repeat bg-cover">
            <div className="max-w-[829px] h-full bg-banner-gradient-mobile mobile:bg-banner-gradient">
                <span className="bannerText left-[4.4%] mobile:left-[10.4%] text-[29px] mobile:text-[42px] tablet-md:text-[50px] tablet-lg:text-[67px]">ДОСТАВКА ВКУСНЕЙШИХ<br/>БЛЮД ЗА 60 МИНУТ</span>
                <span className="bannerText bannetText3d text-[29px] hidden mobile:block mobile:text-[42px] tablet-md:text-[50px] tablet-lg:text-[67px]">ДОСТАВКА ВКУСНЕЙШИХ<br/>БЛЮД ЗА 60 МИНУТ</span>
                <img className="absolute z-[1] top-[250px] tablet-lg:top-[285px] left-[109px] mobile:left-[192px] tablet-md:left-[285px] tablet-lg:left-[424px] w-[236px] mobile:w-[287px]" src={textBg} alt="background" />
                    <img className="absolute z-0 top-[265px] tablet-lg:top-[300px] left-[115px] mobile:left-[199px] tablet-md:left-[292px] tablet-lg:left-[431px] w-[236px] mobile:w-[287px]" src={Rectangle20} alt="border" />
                        <span className="absolute z-[2] top-[272px] tablet-lg:top-[311px] left-[115px] mobile:left-[205px] tablet-md:left-[297px] tablet-lg:left-[435px] font-mulish font-semibold italic text-[21px] mobile:text-[25px] text-center text-white transform rotate-[-8.37deg]">ЕЩЁ НЕ ПРОБОВАЛ?</span>
            </div>
        </section>
);
};

