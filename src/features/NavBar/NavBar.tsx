import React from 'react';

export const NavBar = () => {

    return (
        <nav className="pl-[15px] max-w-full pr-[10px] pb-[2px] border-b-[1px] border-b-white border-opacity-[0.1] desktop-1xl:navigation overflow-x-scroll desktop:overflow-x-auto ">
            <ul className="w-[1272px] desktop-1xl:mx-auto pt-[28px] pb-[29px] flex justify-between">
                <li><a href="#" className="baseTextStyle text-md text-white border-b-[3px] border-b-green hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Холодные закуски</a>
                </li>
                <li><a href="#" className="baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Горячие закуски</a></li>
                <li><a href="#" className="baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Мясные блюда</a></li>
                <li><a href="#" className="baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Супы</a></li>
                <li><a href="#" className="baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Рыбные блюда</a></li>
                <li><a href="#" className="baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Гриль меню</a></li>
                <li><a href="#" className="baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Фирменные блюда</a></li>
                <li><a href="#" className="baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Напитки</a></li>
            </ul>
        </nav>
    );
};

