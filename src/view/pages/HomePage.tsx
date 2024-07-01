import React from 'react';
import {Header} from "../../features/Header/Header";
import {Banner} from "../../features/Banner/Banner";
import {ColdSnacksContentList} from "../../features/MenuContentList/ColdSnacksContentList";
import {Portfolio} from "../../features/Portfolio/Portfolio";
import {Footer} from "../../features/Footer/Footer";
import {NavBar} from "../../features/NavBar/NavBar";

export const HomePage = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <NavBar />
            <ColdSnacksContentList/>
            <Portfolio/>
            <Footer/>
        </>
    );
};

