import React from 'react';

import contactLocation from './images/contact-location.svg'
import logo from './images/logo.svg'
import Home from './images/Arrow-home.svg'
import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import videoPlay from './images/video-play-button.svg'
import vkontakte from './images/vkontakte-logo.svg'
import contactMessage from './images/contact-message.svg'

export const Footer = () => {
    return (
        <footer className="relative">
            <section className="absolute top-[20px] left-[15px] right-[15px] tablet:right-0 tablet:left-[61px] tablet-md:top-[224px] tablet-md:left-[63px] tablet-lg:left-[159px] z-[1] max-w-[526px] min-h-[405px] bg-black shadow-footer pt-[25px] pr-[32px] pb-[24px] pl-[43px] rounded-[15px]">
                <h2 className="text-left font-mulish font-bold text-[30px] uppercase text-white pb-[16px] tablet:pb-[26px] border-b-[1px] border-b-white border-opacity-[0.1]">КОНТАКТЫ</h2>
                <div className="relative mb-[20px] pl-[37px] pt-[15px]">
                    <img src={contactLocation} alt="Location" className="absolute left-[6px]"/>
                        <h3 className="baseTextStyle text-base text-base-white">Наш адрес:</h3>
                        <p className="baseTextStyle text-base text-white">МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10
                        </p>
                </div>

                <div className="relative pb-[28px] pl-[37px] mb-[20px] border-b-[1px] border-b-white border-opacity-[0.1]">
                    <img src={contactMessage} alt="message" className="absolute left-[4px]"/>
                        <h3 className="mb-[5px] baseTextStyle text-base text-base-white">Наша почта:</h3>
                        <a className="text-white" href="mailto:auto.wash@gmail.com">auto.wash@gmail.com</a>
                </div>

                <div className="flex flex-col mx-auto pt-[20px] tablet:pt-0 tablet:flex-row items-center gap-x-[33px] pb-[30px]">
                    <div className='mb-[33px] tablet:mb-0'>
                        <a className="pt-[22px] px-[30px] pb-[21px] bg-green rounded-[10px] border-none font-mulish font-bold text-[13px] text-white active:bg-light-green hover:bg-light-green" href="#" target="_blank">ЗАБРОНИРОВАТЬ СТОЛ</a>
                    </div>
                    <div className="flex flex-col items-start">
                        <a className="font-mulish font-bold text-[21px] text-white" href="tel:+79175105759">+7 (917) 510-57-59</a>
                        <span className="baseTextStyle text-[13px] text-right text-base-white">Звоните или оставляйте заявку</span>
                    </div>
                </div>

                <div className="max-w-[252px] m-auto flex gap-[26px]">
                    <p className="text-white baseTextStyle text-base">Мы в соц сетях:</p>
                    <ul className="flex gap-[11px]">
                        <li>
                            <a href="#" target="_blank">
                                <img src={facebook} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" >
                                <img src={vkontakte} alt="vkontakte" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src={videoPlay} alt="youtube"/>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src={instagram} alt="instagram"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="mt-0 tablet-md:mt-[-225px] z-0 max-w-full">
                <div>
                    <iframe className="w-full h-[930px] tablet:h-[661px] border-0 map "
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17927.696777274003!2d-122.046671282528!3d37.40877125272259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb78d73d3a0e3%3A0xb8b31e3a60eeb2c1!2sGoogle%20MOT1!5e0!3m2!1sru!2sby!4v1658317881018!5m2!1sru!2sby"
                             loading="lazy"></iframe>
                </div>
            </section>

            <section className="w-full h-auto tablet-md:h-[195px] pt-[26px] pb-[30px] pl-[15px] pr-[15px] tablet-lg:pl-[42px] tablet-lg:pr-0 relative z-[1] flex items-center bottom-0 bg-info-gradient">
                <div className="m-auto tablet-md:m-0 flex">
                    <div className="cursor-pointer self-start px-[20px] py-[25px] mr-[15px] tablet-lg:mr-[55px] rounded-[50%] bg-white">
                        <a href="#top">
                            <img src={Home} alt="arrow-home"/>
                        </a>
                    </div>
                    <div className="flex flex-col mr-[30px] desktop:mr-[86px]">
                            <img className='mb-[25px] tablet-md:mb-0 w-[100px] h-[25px]' src={logo} alt="logo"/>
                        <span className="text-center mb-[13px] tablet-md:mb-0 tablet-md:text-left font-mulish font-medium text-xs text-base-white">© ООО СК «АПШЕРОН»<br/>Все права защищены. 2010-2020</span>
                        <a href="#" target="_blank" className="max-w-max border-b-1 border-b-white border-opacity-[0.2] font-mulish font-medium text-base text-white mb-[10px] tablet-md:mb-0 last:mb-0">Пользовательское соглашение</a>
                        <a href="#" target="_blank" className="max-w-max border-b-1 border-b-white border-opacity-[0.2] font-mulish font-medium text-base text-white mb-[10px] tablet-md:mb-0 last:mb-0">Карта сайта</a>
                        <a href="#" target="_blank" className="max-w-max border-b-1 border-b-white border-opacity-[0.2] font-mulish font-medium text-base text-white mb-[10px] tablet-md:mb-0 last:mb-0">Политика конфиденциальности</a>
                    </div>
                </div>

                    <ul className="hidden tablet-md:flex gap-[40px]">
                        <li>
                            <a href="#" target="_blank" className="font-mulish font-medium text-[20px] text-white">О ресторане</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" className="font-mulish font-medium text-[20px] text-white">Условия доставки</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" className="font-mulish font-medium text-[20px] text-white">Возврат товара</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" className="font-mulish font-medium text-[20px] text-white">Акции</a>
                        </li>
                    </ul>
            </section>
        </footer>
    );
};

