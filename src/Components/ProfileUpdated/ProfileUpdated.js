import React from 'react';
import './ProfileUpdated.css';
import pro from '../../Asset/avatar.svg'
import icon1 from '../../Asset/icon_7.svg'
import icon2 from '../../Asset/icon_6.svg'
import icon3 from '../../Asset/icon_4.svg'
import icon4 from '../../Asset/icon_5.svg'
import img from '../../Asset/Add User-pana.svg'
import {Link} from 'react-router-dom'

export default function ProfileUpdated(props){
    console.log(props)
    const data={email:props.location.state.email}
    const editHandler=()=>{
        props.history.push('/editprofile',data)
    }
    return (
        <div className='profile-update'>
            <div className='profile1'>
                <div className='pro_1'>
                    <img src={pro} style={{width:'40px',padding:'0 10px'}} alt='' />
                    <p>Welcome <br/>Stella William</p>
                </div>
                <div className='trade_1'>
                    <div className='sec_1' >
                        <div className='comp_1'>My Trade</div>
                    </div>
                    <div className='second_1'>
                        <div className='comp_1'>Item Won</div>
                        <div className='comp_1'>Item Lost</div>
                        <div className='comp_1'>My Item</div>
                        <div className='comp_1'>My Sold</div>
                    </div>
                    <div className='second_1'>
                        <div className='comp_1'>Account Setting</div>
                        <div className='comp_1' style={{background:'lightPink',color:'red',fontWeight:'bold'}}>Profile</div>
                        <div className='comp_1'>Manage Address</div>
                    </div>
                    <div className='second_1'>
                        <div className='comp_1'>Payment</div>
                        <div className='comp_1'>Wallet</div>
                    </div>
                    <div className='second_1'>
                        <div className='comp_1'>Setting</div>
                        <div className='comp_1'>Notification</div>
                        <div className='comp_1'>Logout</div>
                    </div>
                </div>
            </div>
            <div className='personal-details_1' >
                <div className='dashboard'>
                        <div className='pro_1'>
                            <img src={icon1} style={{width:'35px',padding:'0 20px'}} alt='' />
                            <p>Item sold<br/>23</p>
                        </div>
                        <div className='pro_1'>
                            <img src={icon2} style={{width:'35px',padding:'0 20px'}} alt='' />
                            <p>Item buy<br/>0</p>
                        </div>
                        <div className='pro_1'>
                            <img src={icon3} style={{width:'35px',padding:'0 20px'}} alt='' />
                            <p>Item posted<br/>12</p>
                        </div>
                        <div className='pro_1'>
                            <img src={icon4} style={{width:'35px',padding:'0 20px'}} alt='' />
                            <p>Review<br/>4.3</p>
                        </div>
                </div>
                <div className='edit'>
                    <h4 style={{padding:'0 20px'}}>Personal Information</h4>
                        <p onClick={editHandler}>Edit</p>
                </div>
                <div className='info'>
                    <div className='names'>
                        <label>First Name</label>
                        <p>{props.location.state.firstname}</p>
                    </div>
                    <div className='names'>
                        <label>Last Name</label>
                        <p>{props.location.state.lastname}</p>
                    </div>
                    <div className='names'>
                        <label>Username</label>
                        <p>{props.location.state.username}</p>
                    </div>
                    <div className='names'>
                        <label>Age</label>
                        <p>18+</p>
                    </div>
                    <div className='names'>
                        <label>Country</label>
                        <p>{props.location.state.nzAddressFinder}</p>
                    </div>
                    <div className='address' >
                        <label>Address</label>
                        <p>{props.location.state.addressLine2},{props.location.state.suburb}, {props.location.state.towncity} {props.location.state.postalcode}</p>
                    </div>
                </div>
                <div className='verification-details'>
                    <div className='verifications'>
                        <div className='email'>
                            <h4>Email <span>Verify</span></h4>
                            <p>{props.location.state.email}</p>
                        </div>
                        <div className='mobile'>
                            <h4>Mobile number <span>Add</span></h4>
                            <p>Add your mobile number</p>
                        </div>
                    </div>
                    <img src={img} alt='' />
                </div>
            </div>
        </div>       
    )
}