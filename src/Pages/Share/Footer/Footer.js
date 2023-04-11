import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-bg row w-100  p-5 border-rounded mt-5'>
            <div className='col-4'>
                <img src="https://html.designingmedia.com/whizcyber/assets/images/whiz-cyber-logo.png" alt="" />
                <div>
                    <p className='text-white mt-3'>Deleniti aeue corrupti quos dolores et quas molestias excepturi sint occaecati rupiditate non provident, similique sunt...</p>
                </div>
            </div>
            <div className='col-4 text-white'>
                <h3>About Us</h3>
                <ul className='mt-4 text-white'>
                    <li>Srvices</li>
                    <li>priceing</li>
                    <li>Our Teams</li>
                    <li>About</li>
                </ul>
            </div>
            <div className='col-4 text-white'>
                <h3>Conatact info</h3>
                <ul className='mt-4 text-white' style={{ listStyle: "none", }}>
                    <li>+61 3 8376 6284</li>
                    <li>ssk96638@gmail.com</li>
                    <li>21 King Street Melbourne,3000, Australia</li>
                </ul>
            </div>
        </div >
    );
};

export default Footer;