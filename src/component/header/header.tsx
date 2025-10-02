import React, { useEffect, useState } from 'react';
import logo from '../../assets/image/logo.svg';
import search from '../../assets/image/icon_btn.svg';
import bookmark from '../../assets/image/icon_btn_mark.svg'
import './style.css'

const Header = () => {


    return (
        <div id={'header'}>
            <img src={logo} alt="logo" />

            <div className='t'>
                <div>한국</div>
                <div>해외</div>
                <div>중국</div>
                <div>커머스</div>
            </div>

            <div className='c'>
                <img src={search} alt="logo" />
                <img src={bookmark} alt="logo" />
                <div className="avatar">
                    <span className="badge"></span>
                </div>
            </div>

        </div>

    );
};

export default Header;