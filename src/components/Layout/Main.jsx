import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"/>
        </div>
    );
};

export default Main;