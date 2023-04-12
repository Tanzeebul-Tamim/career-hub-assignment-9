import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <div className="md:mx-24 mx-5 mb-32">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;