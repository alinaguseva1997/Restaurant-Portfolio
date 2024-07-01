import React from 'react';
import {MenuItem} from "./MenuItem/MenuItem";

export const ColdSnacksContentList = () => {
    return (
        <section className='relative mx-auto mb-[50px]'>
            <section className='mx-auto ml-[20px] tablet-lg:ml-[114px] pb-[50px] border-b-[1px] last:border-b-0 border-b-white border-opacity-[0.1]'>
            <p className='mt-[50px] mb-[35px] pl-[20px] border-l-[4px] border-l-green font-mulish font-bold text-[20px] mobile:text-[28px] tablet-lg:text-[32px] text-white'>ХОЛОДНЫЕ ЗАКУСКИ</p>
                <div className='flex gap-[20px] cursor-pointer flex-wrap mx-auto'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
                </div>
            </section>

            {/*<section className='ml-[114px] pb-[50px] border-b-[1px] last:border-b-0 border-b-white border-opacity-[0.1]'>*/}
            {/*    <p className='mt-[50px] mb-[35px] pl-[20px] border-l-[4px] border-l-green font-mulish font-bold text-[32px] text-white'>ГОРЯЧИЕ*/}
            {/*        ЗАКУСКИ</p>*/}
            {/*    <div className='flex gap-[20px] cursor-pointer flex-wrap mx-auto'>*/}
            {/*        <MenuItem/>*/}
            {/*        <MenuItem/>*/}
            {/*        <MenuItem/>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<section className='ml-[114px] pb-[50px] border-b-[1px] last:border-b-0 border-b-white border-opacity-[0.1]'>*/}
            {/*    <p className='mt-[50px] mb-[35px] pl-[20px] border-l-[4px] border-l-green font-mulish font-bold text-[32px] text-white'>МЯСНЫЕ*/}
            {/*        БЛЮДА</p>*/}
            {/*    <div className='flex gap-[20px] cursor-pointer flex-wrap mx-auto'>*/}
            {/*        <MenuItem/>*/}
            {/*        <MenuItem/>*/}
            {/*        <MenuItem/>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </section>
    );
};

