import React from 'react';
import styles from './Navbar.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/toggleModal';
const Navbar = () => {
    const dispatch = useDispatch();
    const toggleModalHandler = () => {
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
            </div>
        </>
    )
}

export default Navbar;