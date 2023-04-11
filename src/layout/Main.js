import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Share/Footer/Footer';
import Header from '../Pages/Share/Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div className='bg-color'>
            <Header></Header>
            <div style={{ minHeight: "200px" }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default Main;