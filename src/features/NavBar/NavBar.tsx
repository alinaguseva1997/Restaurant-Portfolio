import React from 'react';

export type NavBarPropsType = {
    setTabNumber?: (tab: number) => void
    activeTab?: number
}
export const NavBar = (props: NavBarPropsType) => {

    const onClickHandler = (tab: number) =>{
        if(props.setTabNumber)
            props.setTabNumber(tab)
    }

    return (
        <nav className="pl-[15px] max-w-full pr-[10px] pb-[2px] border-b-[1px] border-b-white border-opacity-[0.1] desktop-1xl:navigation overflow-x-scroll desktop:overflow-x-auto ">
            <ul className="w-[1272px] desktop-1xl:mx-auto pt-[28px] pb-[29px] flex justify-between">
                <li><span onClick={()=>onClickHandler(1)} className={`${props.activeTab === 1 ? 'text-white border-b-green' : 'text-base-white border-b-transparent' } cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]`}>Холодные закуски</span>
                </li>
                <li><span onClick={()=>onClickHandler(2)} className={`${props.activeTab === 2 ? 'text-white border-b-green' : 'text-base-white border-b-transparent' } cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]`}>Горячие закуски</span></li>
                <li><span onClick={()=>onClickHandler(3)} className={`${props.activeTab === 3 ? 'text-white border-b-green' : 'text-base-white border-b-transparent' } cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]`}>Мясные блюда</span></li>
                <li><span onClick={()=>onClickHandler(4)} className={`${props.activeTab === 4 ? 'text-white border-b-green' : 'text-base-white border-b-transparent' } cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]`}>Супы</span></li>
                <li><span onClick={()=>onClickHandler(5)} className={`${props.activeTab === 5 ? 'text-white border-b-green' : 'text-base-white border-b-transparent' } cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]`}>Рыбные блюда</span></li>
                <li><span onClick={()=>onClickHandler(6)} className={`${props.activeTab === 6 ? 'text-white border-b-green' : 'text-base-white border-b-transparent' } cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]`}>Гриль меню</span></li>
                <li><span onClick={()=>onClickHandler(7)} className={`${props.activeTab === 7 ? 'text-white border-b-green' : 'text-base-white border-b-transparent' } cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]`}>Фирменные блюда</span></li>
                <li><span onClick={()=>onClickHandler(8)} className={`${props.activeTab === 8 ? 'text-white border-b-green' : 'text-base-white border-b-transparent' } cursor-pointer baseTextStyle text-md text-base-white border-b-[3px] hover:border-b-green hover:font-medium hover:text-white active:border-b-green active:font-medium active:text-white pt-[28px] pb-[29px]`}>Напитки</span></li>
            </ul>
        </nav>
    );
};

