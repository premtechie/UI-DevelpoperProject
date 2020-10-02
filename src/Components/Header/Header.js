import React from 'react';
import logo from '../../Asset/logo.png';
import './Header.css';
import bag from '../../Asset/icon_6.svg';

export default function header(){
    return(
        <div>
            <div className='head'>
                <div className='logo' >
                    <img src={logo} alt='' />
                    <input type='text' placeholder='Search for Product, brand and more' />
                </div>
                <div className='nav-item'>
                    <p>Login/Register</p>
                    <p>My Trade</p>
                    <img src={bag} alt='' />
                    <button>List an Item</button>
                </div>
            </div>
            <div className='sticky-header'>
                <div>
                    <p style={{fontSize:'10px',lineHeight:'10px'}}>Location</p>
                    <p style={{lineHeight:'10px'}}>Auckland,Nz</p>
                </div>
                <div>View Category</div>
                <div>MarketPlace</div>
                <div>cars&Bike</div>
                <div>Jobs</div>
                <div>Property</div>
                <div>Services</div>
            </div>
        </div>
    )
}