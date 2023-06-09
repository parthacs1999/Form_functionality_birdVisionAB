import React from 'react';
import styles from './form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { registerActions } from '../../store/register';
import { loginActions } from '../../store/login';
import { modalActions } from '../../store/toggleModal';

const Form = () => {
    const dispatch = useDispatch();
    const showRegister = useSelector(state => state.register.showRegisterPage);
    const showLoginFormCustomer = useSelector(state => state.login.showLoginFormCustomer);
    const showRegisterFormCustomer = useSelector(state => state.register.showRegisterFormCustomer);

    const showRegisterPageHandler = () => {
        dispatch(registerActions.registerPage());
        if (showLoginFormCustomer) {
            dispatch(loginActions.customerLogin());
        }
        else {
            dispatch(loginActions.providerLogin());
        }
    }

    const loginSubmitHandler = () => {
        alert('Successfully Logged in');
        if (showLoginFormCustomer) {
            dispatch(loginActions.customerLogin());
        }
        else {
            dispatch(loginActions.providerLogin());
        }
        dispatch(modalActions.close());
    }
    const registerSubmitHandler = () => {
        alert('Successfully Registered');
        if (showRegisterFormCustomer) {
            dispatch(registerActions.customerRegister());
        }
        else {
            dispatch(registerActions.providerRegister());
        }
        dispatch(registerActions.registerPage());
        dispatch(modalActions.close());
    }

    const showLoginPageHandler = () => {
        if (showRegister) {
            dispatch(registerActions.registerPage());
        }
        if (showRegisterFormCustomer) {
            dispatch(registerActions.customerRegister());
        }
        else {
            dispatch(registerActions.providerRegister());
        }
    }
    return (
        <>
            {
                showRegister === false
                    ? (
                        <div className={styles.formContainer}>
                            <h2>Login as a {showLoginFormCustomer ? 'customer' : 'service provider'}</h2>
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <div className={styles.buttonContainer}>
                                <button onClick={loginSubmitHandler}>Login</button>
                                <button onClick={showRegisterPageHandler}>Register</button>
                            </div>
                        </div>
                    )
                    : (
                        <div className={styles.formContainer}>
                            <h2>Register as a {showRegisterFormCustomer ? 'customer' : 'service provider'}</h2>
                            <input type="text" placeholder='Contact person' />
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <input type="password" placeholder='Confirm Password' />
                            <div className={styles.buttonContainer}>
                                <button onClick={registerSubmitHandler}>Register</button>
                                <button onClick={showLoginPageHandler}>Login</button>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Form