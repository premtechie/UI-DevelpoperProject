import React from 'react';
import logo from '../../Asset/logo.png';
import './Header.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
export default function header(){
    return(
        <div>
            <div className='head'>
                <div className='logo' >
                    <img src={logo} alt='' />
                    <input type='text' placeholder='Search for Product, brand and more' />
                </div>
                <div className='nav-item'>
                    <Link to='/' style={{textDecoration:'none',color:'white'}}>
                        <p>Login/Register</p>
                    </Link>   
                    <div className='profile-icon'>
                        <PersonIcon style={{fontSize:'20px',width:'17px'}} />
                        <p>My Trade</p>
                    </div>
                        <ShoppingCartIcon style={{padding:'0 20px'}} />
                    <button>List an Item</button>
                </div>
            </div>
            <div className='sticky-header'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <LocationOnIcon style={{width:'30px'}} />
                    <div style={{width:'70px'}}>
                        <p style={{fontSize:'10px',lineHeight:'5px'}}>Location</p>
                        <p style={{lineHeight:'5px',fontSize:'10px'}}>Auckland,Nz</p>
                    </div>
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