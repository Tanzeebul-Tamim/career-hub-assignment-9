import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Main = () => {
    const handleAddToApplied = id => {
        console.log(id)
    }
    const AppliedJobContext = createContext(handleAddToApplied)
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