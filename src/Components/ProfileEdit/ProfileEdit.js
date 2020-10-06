import React from 'react';
import './ProfileEdit.css';
import pro from '../../Asset/avatar.svg'
import {Formik,Form,Field,ErrorMessage } from 'formik'
import TextError from '../RegisterForm/TextError';
import axios from 'axios';
import headers from '../headers';


//----------------------initail values-------------------

const initialValue={
    firstname:'',
    lastname:'',
    username:'',
    nzAddressFinder:'',
    addressLine2:'',
    suburb:'',
    towncity:'',
    postalcode:'',
    checkbox:''
}

//-------------------validation for fields--------------------------

const validate=values=>{
    let errors={}

    if(!values.firstname){
        errors.firstname='Required'
    }
    else if(values.firstname.length<5){
        errors.firstname='should be above 5 characters'
    }
    if(!values.lastname){
        errors.lastname='Required'
    }
    if(!values.username){
        errors.username='Required'
    }
    else if(values.username.length<5){
        errors.username='should be above 5 characters'
    }
    if(!values.nzAddressFinder){
        errors.nzAddressFinder='Required'
    }
    if(!values.addressLine2){
        errors.addressLine2='Required'
    }
    if(!values.suburb){
        errors.suburb='Required'
    }
    if(!values.towncity){
        errors.towncity='Required'
    }
    if(!values.postalcode){
        errors.postalcode='Required'
    }
    return errors;
}
    

export default function ProfileEdit(props){

    //--------------submit handlers----------------

    const onSubmit=values=>{

        
        //-------------payload for the API---------------------------

        const updateProfilePayload=(values)=>{
            return{
                "id":props.location.state.id,
                "user_name": values.username,
                "user_first_name": values.firstname,
                "user_last_name": values.lastname,
                "user_business_name": "abc pvt ltd",
                "user_business_IRD_number": "123456789",
                "user_business_type": "ABC"
            }
        }

        // -------------------data for the navigation page-------------------

        const data={...values,email:props.location.state.email,id:props.location.state.id}
        
        //---------------api call in the function---------------------

        axios.post('https://dksinha.website/eCommerce/eCommerce_API/test/test_profile_update/',
        updateProfilePayload(values),{headers}).
            then(response=>{
                props.history.push('/profileupdate',data)
            })

    }  
    
    return (
        <div className='profile-edit'>
            <div className='profile'>
                <div className='pro'>
                    <img src={pro} style={{width:'40px',padding:'0 10px'}} alt='' />
                    <p>Welcome <br/>Stella William</p>
                </div>
                <div className='trade'>
                    <div className='sec' >
                        <div className='comp'>My Trade</div>
                    </div>
                    <div className='second'>
                        <div className='comp'>Item Won</div>
                        <div className='comp'>Item Lost</div>
                        <div className='comp'>My Item</div>
                        <div className='comp'>My Sold</div>
                    </div>
                    <div className='second'>
                        <div className='comp'>Account Setting</div>
                        <div className='comp' style={{background:'lightPink',color:'red',fontWeight:'bold'}}>Profile</div>
                        <div className='comp'>Manage Address</div>
                    </div>
                    <div className='second'>
                        <div className='comp'>Payment</div>
                        <div className='comp'>Wallet</div>
                    </div>
                    <div className='second'>
                        <div className='comp'>Setting</div>
                        <div className='comp'>Notification</div>
                        <div className='comp'>Logout</div>
                    </div>
                </div>
            </div>
            <div className='personal-details' >
                <h4>Personal Details</h4>
                <Formik 
                    initialValues={initialValue}
                    validate={validate}
                    onSubmit={onSubmit}
                >
                <Form className='form-details'>
                        <div className='fields'>
                            <label>FIRST NAME</label>
                            <Field className='inputs'
                                type='text'
                                name='firstname'
                                id='firstname'
                                placeholder='First Name'
                            />
                            <ErrorMessage name='firstname' component={TextError} />
                        </div>
                        <div className='fields'>
                            <label>LAST NAME</label>
                            <Field
                                type='text'
                                name='lastname'
                                id='lastname'
                                placeholder='Last Name'
                            />
                            <ErrorMessage name='lastname' component={TextError} />
                        </div>
                        <div className='fields'>
                            <label>USERNAME</label>
                            <Field
                                type='text'
                                name='username'
                                id='username'
                                placeholder='User Name'
                            />
                            <ErrorMessage name='username' component={TextError} />
                        </div>
                        <div className='fields'>
                            <label>NZ ADDRESS FINDER</label>
                            <Field 
                                type='text'
                                name='nzAddressFinder'
                                id='nzAddressFinder'
                                placeholder='NZ Address'
                            />
                            <ErrorMessage name='nzAddressFinder' component={TextError} />
                        </div>
                        <div className='fields'>
                            <label>ADDRESS LINE2</label>
                            <Field
                                type='text'
                                name='addressLine2'
                                id='addressLine2'
                                placeholder='Address Line2'
                            />
                            <ErrorMessage name='addressLine2' component={TextError} />
                        </div>
                        <div className='fields'>
                            <label>SUBURB</label>
                            <Field
                                type='text'
                                name='suburb'
                                id='suburb'
                                placeholder='Suburb'
                            />
                            <ErrorMessage name='suburb' component={TextError} />
                        </div>
                        <div className='fields'>
                            <label>TOWN/CITY</label>
                            <Field
                                type='text'
                                name='towncity'
                                id='towncity'
                                placeholder='Town/City'
                            />
                            <ErrorMessage name='towncity' component={TextError} />
                        </div >
                        <div className='fields'>
                            <label>POSTCODE</label>
                            <Field
                                style={{width:'40%',padding:'10px'}}
                                type='number'
                                name='postalcode'
                                id='postalcode'
                            />
                            <ErrorMessage name='postalcode' component={TextError} />
                        </div>
                    <div>
                        <div style={{fontSize:'12px', margin:'10px 20px',display:'flex',alignItems:'center'}}>
                            <Field type='checkbox' name='checkbox' id='checkbox' />
                            <p style={{margin:'0 10px',width:'200px'}}>Are you above 18+</p> 
                        </div>
                        <div className='save-btn'>
                                <button type='submit'>
                                    Save
                                </button>
                        </div>
                    </div>
                </Form>
                </Formik>
            </div>
        </div>       
    )
}