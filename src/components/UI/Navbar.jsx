import React from 'react';
import styles from './Navbar.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/toggleModal';
import { registerActions } from '../../store/register';
const Navbar = () => {
    const dispatch = useDispatch();
    const showRegister = useSelector(state => state.register.showRegisterPage);
    const toggleModalHandler = () => {
        if (showRegister === true) {
            dispatch(registerActions.registerPage());
        }
        dispatch(modalActions.open());
    }
    const registerShowHandler = () => {
        if (showRegister === false) {
            dispatch(registerActions.registerPage());
        }
        dispatch(modalActions.open());
    }

    return (
        <>
            <div className={styles.container}>
                <h2>BirdVision AB</h2>
                <div className={styles.loginContainer} onClick={toggleModalHandler}>
                    <FaUserCircle className={styles.userIcon} />
                    <p>Login</p>
                </div>
                <div className={styles.loginContainer} onClick={registerShowHandler}>
                    <FaUserCircle className={styles.userIcon} />
                    <p>Register</p>
                </div>
            </div>
        </>
    )
}

export default Navbar;