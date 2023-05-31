import React from 'react';
import styles from './form.module.css';
import { useSelector } from 'react-redux';


const Form = () => {
    const showRegister = useSelector(state => state.register.showRegisterPage);
    const showLoginFormCustomer = useSelector(state => state.login.showLoginFormCustomer);
    const showRegisterFormCustomer = useSelector(state => state.register.showRegisterFormCustomer);
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
                                <button>Login</button>
                                <button>Register</button>
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
                                <button>Register</button>
                                <button>Login</button>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Form