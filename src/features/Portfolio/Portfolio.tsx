import React from 'react';

export const Portfolio = () => {
    return (
        <section className="hidden relative z-[1] tablet-md:flex gap-[50px] desktop:gap-[174px] mx-[15px] desktop-1xl:mx-auto mb-[70px] px-[71px] py-[70px] max-w-[1364px] min-h-[610px] portfolioBg">
            <div className="basis-[563px]">
                <h1 className="mb-[26px] font-mulish font-bold text-[32px] text-white">НАШЕ КАФЕ</h1>
                <p className="mb-[60px] baseTextStyle text-[20px] text-base-white">Мы расположены в одном из самых
                    живописных мест города — на
                    берегу реки,
                    это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно
                    уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в
                    основном
                    зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая
                    террасса,
                    шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
                <a href="#" target="_blank" className="pt-[20px] pr-[25px] pb-[21px] pl-[58px] border-[1px] border-white border-opacity-[0.2] hover:bg-opacity-[0.2] rounded-[10px] bg-white bg-opacity-[0.05] font-mulish font-bold text-[13px] text-white">ПОСМОТРЕТЬ МЕНЮ</a>
            </div>

            <div className="hidden laptop:flex basis-[816px] desktop-1xl:basis-[471px] max-h-[468px] gap-[15px] flex-wrap">
                <div className="before:content-onion-white hover:before:content-onion-green relative flex flex-col items-center basis-[228px] max-h-[226px] pt-[66px] px-[17px] pb-[40px] bg-gray hover:bg-gray hover:shadow-portfolio cursor-pointer aboutUs">
                    <a href="#" target="_blank" className="pt-[19px] baseTextStyle text-md text-white benefitsBlock">Свежайшие продукты</a>
                </div>

                <div className="before:content-vector hover:before:content-vector-green relative flex flex-col items-center basis-[228px] max-h-[226px] pt-[66px] px-[17px] pb-[40px] bg-gray hover:bg-gray hover:shadow-portfolio cursor-pointer aboutUs">
                    <a href="#" target="_blank" className="pt-[19px] baseTextStyle text-md text-white benefitsBlock">Быстрая доставка</a>
                </div>

                <div className="before:content-chef hover:before:content-chef-green relative flex flex-col items-center basis-[228px] max-h-[226px] pt-[66px] px-[17px] pb-[40px] bg-gray hover:bg-gray hover:shadow-portfolio cursor-pointer aboutUs">
                    <a href="#" target="_blank" className="pt-[19px] baseTextStyle text-md text-white benefitsBlock">Лучшие повара</a>
                </div>

                <div className="before:content-onion-white hover:before:content-onion-green relative flex flex-col items-center basis-[228px] max-h-[226px] pt-[66px] px-[17px] pb-[40px] bg-gray hover:bg-gray hover:shadow-portfolio cursor-pointer aboutUs">
                    <a href="#" target="_blank" className="pt-[19px] baseTextStyle text-md text-white benefitsBlock">Свежайшие продукты</a>
                </div>
            </div>
        </section>

    );
};

