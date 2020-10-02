import React, { useState } from 'react';
import './RegisterForm.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextError from './TextError';
import logo1 from '../../Asset/icons_1.svg'
import logo2 from '../../Asset/icons_3.svg'
import logo3 from '../../Asset/icons_2.svg'
import request from '../axios';

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}
const load='Loading'
const register='Register Now'
const initialLoginValues = {
    email:'',
    password:''
}

const getPayload = (values) => {
    return {
        "user_email": values.email,
        "user_pwd": values.password,
        "c_user_pwd": values.confirmPassword,
        "user_type": "1",
        "captcha": "true",
        "t_and_c": "true"
    }
}

const loginPayload = (values) => {
    return {
        "email": values.email,
        "pwd": values.password,
        "captcha": "true"
    }
}

const validate = values => {
    let errors = {}
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!values.email) {
        errors.email = 'Required!'
    }
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = 'Invalid email format!'
    }
    if (!values.password) {
        errors.password = 'Required!'
    }
    else if (!values.password.match(passw)) {
        errors.password = 'password between 6 to 20 characters & one numeric digit, one uppercase and one lowercase'
    }
    if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'password doesnot match'
    }
    return errors

}
const loginValidate=values=>{
    let errors = {}
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!values.email) {
        errors.email = 'Required!'
    }
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = 'Invalid email format!'
    }
    if (!values.password) {
        errors.password = 'Required!'
    }
    return errors;
}


export default function RegisterForm(props) {
    const [loading,setLoading]=useState(false)
    const [login,setLogin]=useState(true)

    const onSubmit = values => {
    request.post('eCommerce/eCommerce_API/test/test_registration/', getPayload(values)).then(res => {
        console.log('RES : ', res);    
    })
    // const data=values.email
    props.history.push('/editprofile',{email:values.email})  

}
    const onLogin=values=>{
        
        request.post('eCommerce/eCommerce_API/test/test_login/',loginPayload(values)).then(res=>{
            console.log('RES : ',res)
        })
        console.log('vales:',values)
        props.history.push('/editprofile',{email:values.email})  
    }

    const loginHandler=()=>{
        setLogin(false)
    }

    const registerHandler=()=>{
        setLogin(true)
    }
    return (
        <div>
            <div className='Head-Content'>
                <div className='side-content'>
                    <p className='reg'>Register</p>
                    <h1>Register for Free & start auctioning product</h1>
                    <p>Please note the 'Username' and 'Password' used here are only to access your company.com Seller Account and can't be used on company.com shopping destination</p>
                </div>
                {login?<Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={onSubmit}
                >
                    <Form className='form'>
                        <Field
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter email id'
                        />
                        <ErrorMessage name='email' component={TextError} />
                        <Field
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Enter Password'
                        />
                        <ErrorMessage name='password' component={TextError} />
                        <Field
                            type='password'
                            id='confirmPassword'
                            name='confirmPassword'
                            placeholder='Confirm Password'
                        />
                        <ErrorMessage name='confirmPassword' component={TextError} />
                        <div className='register'>
                            <button type='submit'>{loading ?load:register}</button>
                            <p onClick={loginHandler}>Existing User ? Login</p>
                        </div>
                    </Form>
                </Formik>:
                <Formik
                    initialValues={initialLoginValues}
                    validate={loginValidate}
                    onSubmit={onLogin}
                >
                    <Form className='form'>
                        <Field 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter email id'
                        />
                        <ErrorMessage name='name' component={TextError} />
                        <Field 
                            type='password'
                            id='email'
                            name='password'
                            placeholder='password'
                        />
                        <ErrorMessage name='password' component={TextError} />
                        <div className='register'>
                            <button type='submit'>Login</button>
                            <p onClick={registerHandler}>New User ? Register Account</p>
                        </div>
                    </Form>
                </Formik>
                }
            </div>
            <div className='quote'>
                <h1 >Sell to crores of Customers on trades right from your doorstep!</h1>
            </div>
            <div className='center-content' >
                <div className='inner-content'>
                    <img src={logo1} alt='' />
                    <h3>Easy to use</h3>
                    <p>On-the-spot onboarding with just 3 simple step</p>
                </div>
                <div className='inner-content'>
                    <img src={logo2} alt='' />
                    <h3>Transact Online</h3>
                    <p>Transact Online with buyers and sellersTransact online with buyers and sellers</p>
                </div>
                <div className='inner-content'>
                    <img src={logo3} alt='' />
                    <h3>Demand & Supply</h3>
                    <p>One marketplace for all kind of products one marketplace for all kind of products</p>
                </div>
            </div>
        </div>
    )
}