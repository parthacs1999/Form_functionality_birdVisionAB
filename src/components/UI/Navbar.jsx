import React from 'react';
import styles from './Navbar.module.css';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <h2>BirdVision AB</h2>
                <div className={styles.loginContainer}>
                    <FaUserCircle className={styles.userIcon} />
                    <p>Login</p>
                </div>
            </div>
        </>
    )
}

export default Navbar;