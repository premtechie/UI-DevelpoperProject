import React from 'react';
import './ProfileEdit.css';
import pro from '../../Asset/avatar.svg'
import {Link} from 'react-router-dom'
import Checkbox from '../Checkbox';
import {Formik,Form,Field,ErrorMessage } from 'formik'
import TextError from '../RegisterForm/TextError';

const initialValue={
    firstname:'',
    lastname:'',
    username:'',
    nzAddressFinder:'',
    addressLine2:'',
    suburb:'',
    towncity:'',
    postalcode:'',
}
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
    
    const onSubmit=values=>{
        const data={...values,email:props.location.state.email}
        props.history.push('/profileupdate',data)
        console.log('Form values',values)
    }
    console.log(initialValue,'Values')
    console.log('email',props)

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
                            <Field
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
                                style={{width:'30%'}}
                                type='number'
                                name='postalcode'
                                id='postalcode'
                            />
                            <ErrorMessage name='postalcode' component={TextError} />
                        </div>
                    <div>
                        <div style={{fontSize:'12px', margin:'10px 20px',display:'flex',alignItems:'center'}}>
                            <Checkbox />
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