import React from 'react';

export type NavBarPropsType = {
    setTabNumber: (tab: number) => void
}
export const NavBar = (props: NavBarPropsType) => {

    return (
        <nav className="pl-[15px] max-w-full pr-[10px] pb-[2px] border-b-[1px] border-b-white border-opacity-[0.1] desktop-1xl:navigation overflow-x-scroll desktop:overflow-x-auto ">
            <ul className="w-[1272px] desktop-1xl:mx-auto pt-[28px] pb-[29px] flex justify-between">
                <li><span onClick={()=>props.setTabNumber(1)} className="cursor-pointer baseTextStyle text-md text-white border-b-[3px] border-b-green hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Холодные закуски</span>
                </li>
                <li><span onClick={()=>props.setTabNumber(2)} className="cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Горячие закуски</span></li>
                <li><span onClick={()=>props.setTabNumber(3)} className="cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Мясные блюда</span></li>
                <li><span onClick={()=>props.setTabNumber(4)} className="cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Супы</span></li>
                <li><span onClick={()=>props.setTabNumber(5)} className="cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Рыбные блюда</span></li>
                <li><span onClick={()=>props.setTabNumber(6)} className="cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Гриль меню</span></li>
                <li><span onClick={()=>props.setTabNumber(7)} className="cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Фирменные блюда</span></li>
                <li><span onClick={()=>props.setTabNumber(8)} className="cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] border-b-transparent hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]">Напитки</span></li>
            </ul>
        </nav>
    );
};

