import React,{useState} from 'react';
import './ProfileUpdated.css';
import pro from '../../Asset/avatar.svg'
import icon1 from '../../Asset/icon_7.svg'
import icon2 from '../../Asset/icon_6.svg'
import icon3 from '../../Asset/icon_4.svg'
import icon4 from '../../Asset/icon_5.svg'
import img from '../../Asset/Add User-pana.svg'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import axios from 'axios';
import {Formik,Field,Form} from 'formik';
import headers from '../headers';


export default function ProfileUpdated(props){


    //------------data to be sent to navigated pages---------------
    
    const data={email:props.location.state.email,
        id:props.location.state.id
    }

    //--------edit profile datas----------------
    
    const editHandler=()=>{
        props.history.push('/editprofile',data)
    }
    
    // ---------------------useState handlers-------------
    
    const [otpSent,setOTP]=useState(false)
    const [verified,verify]=useState(false)

    //-------------------api calls-----------------------------
    
    const emailVerificationHandler=()=>{
        
        const emailPayload=()=>{
            return {
                "id":props.location.state.id,
                "email":props.location.state.email
            }
        }
        axios.post('https://dksinha.website/eCommerce/eCommerce_API/test/test_email_generate_otp/',emailPayload(),{headers}).
        then(response=>{
            alert('OTP sent to the mail')
            console.log(response)
            setOTP(true)
        })

    }
    
    //-------------------initial values for form --------------------
    
    const initialValues={
        text:''
    }
    
    //--------------submit form------------------------

    const onValidate=(values)=>{
        const headers={
            "X-API-KEY": "ds89fdfvcb87gf8dfdg87fdghgjh897",
            "Authorization": "Basic YWRtaW46MTIzNA==",
            "Content-Type": "application/json"
        }
        const otpPayload=(values)=>{
            return {
                "id": props.location.state.id,
                "otp": values.text
            }
        }    
        axios.post('https://dksinha.website/eCommerce/eCommerce_API/test/test_email_otp_validation/',otpPayload(values),{headers}).
        then(response=>{
            alert('Verified Successfully')
            console.log('Response OTP : ', response.data)
            setOTP(false)
            verify(true)
        })
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
                        <div className='icon'>
                            <img src={icon1} style={{width:'35px',padding:'0 10px'}} alt='' />
                            <p>Item sold<br/><strong>23</strong></p>
                        </div>
                        <div className='icon'>
                            <img src={icon2} style={{width:'35px',padding:'0 10px'}} alt='' />
                            <p>Item buy<br/><strong>0</strong></p>
                        </div>
                        <div className='icon'>
                            <img src={icon3} style={{width:'35px',padding:'0 10px'}} alt='' />
                            <p>Item posted<br/><strong>12</strong></p>
                        </div>
                        <div className='icon'>
                            <img src={icon4} style={{width:'35px',padding:'0 10px'}} alt='' />
                            <p>Review<br/><strong>4.3</strong></p>
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
                        {props.location.state.checkbox?<p>18+</p>:<p>below 18</p>}
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
                            <h4>Email {!verified ?<span onClick={emailVerificationHandler} >Verify</span>:<span>Verified</span>}</h4>
                            <div>
                                <MailOutlineIcon />
                                <p>{props.location.state.email}</p>
                                {otpSent ?
                                    <Formik 
                                        initialValues={initialValues}
                                        onSubmit={onValidate}
                                    >   
                                        <Form>
                                            <Field type='text' id='text' name='text' />
                                            <button>Validate</button>
                                        </Form>
                                    </Formik>
                                :null
                                }
                            </div>
                        </div>
                        <div className='mobile'>
                            <h4>Mobile number <span>Add</span></h4>
                            <div>
                                <CallIcon />
                                <p>Add your mobile number</p>
                            </div>
                        </div>
                    </div>
                    <img src={img} alt='' />
                </div>
            </div>
        </div>       
    )
}