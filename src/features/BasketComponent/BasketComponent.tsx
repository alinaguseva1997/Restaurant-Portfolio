import React from 'react';
import productImg from './images/dich.jpg'

export const BasketComponent = () => {
    return (
        <section className=''>
            <div>
                <span>← к выбору блюда</span>
                <div>
                    <p className='mt-[50px] mb-[35px] pl-[20px] border-l-[4px] border-l-green font-mulish font-bold text-[20px] mobile:text-[28px] tablet-lg:text-[32px] text-white'>КОРЗИНА</p>
                    <span>(в корзине 3 товара)</span>
                </div>
            </div>

            <div>
                <div>
                    <img src={productImg} alt="product"/>
                    <div>
                        <span>ЯГНЕНОК</span>
                        <p>Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто</p>
                    </div>
                    <div>
                        <div>
                            <button>-</button>
                        </div>
                        <span>1</span>
                        <div>
                            <button>+</button>
                        </div>
                    </div>
                    <span>1640 ₽</span>
                    <div>
                        <button>☓</button>
                    </div>
                </div>
            </div>

            <p>ДОБАВИТЬ К ЗАКАЗУ</p>

            <div>
                <div>
                    <div>
                        <img src={productImg} alt="product"/>
                        <span>КВАС АНАНАСОВЫЙ</span>
                        <div>
                            <span>Добавить</span>
                            <div>
                                <button>+</button>
                            </div>
                        </div>
                        <span>1640 ₽</span>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                    <span>Итого:</span>
                    <span>500 ₽</span>
                    </div>
                    <div>
                    <span>До бесплатной доставки не хватает:</span>
                    <span>100 ₽</span>
                    </div>
                    <span>Минимальная сумма заказа 1500 ₽</span>
                </div>
                <div>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </section>
    );
};

