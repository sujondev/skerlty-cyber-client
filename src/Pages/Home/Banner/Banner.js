import React from 'react';

const Banner = () => {
    return (
        <div className='banner h-100 container d-flex flex-column-reverse flex-md-row justify-content-between align-items-center'>
            {/* <img className='banner-img' src="https://html.designingmedia.com/whizcyber/assets/images/header-right-img.png" alt="" /> */}
            <div>
                <h1 className='text-white fw-bold'>We Provide <span className='h1-text'>Cyber <br />Solutions </span>
                    For Your <br />
                    Security</h1>
                <p className='text-white'>Quis autem vel eum iure reprehenderit qui in ea <br />
                    voluptate velit esse ruam nihil molestiae.</p>
            </div>
            <img className='img-fluid h-50 w-50' src="https://html.designingmedia.com/whizcyber/assets/images/whiz-cyber-banner.png" alt="" />
        </div>
    );
};

export default Banner;