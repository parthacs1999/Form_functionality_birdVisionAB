import React from 'react';
import styles from './Modal.module.css';
import { RxCross1 } from 'react-icons/rx';
import { BsArrowRight } from 'react-icons/bs'
const Modal = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.cancelButton}>
                    <RxCross1 className={styles.icon} />
                </div>

                <div className={styles.clickConatiner}>
                    <div className={styles.click}>
                        <div className={styles.textContainer}>
                            <h1>Login as a customer</h1>
                            <p>Book/biew bookings</p>
                        </div>
                        <div className={styles.rightArrowIcon}>
                            <BsArrowRight className={styles.icon} />
                        </div>
                    </div>
                    <div className={styles.click}>
                        <div className={styles.textContainer}>
                            <h1>Login as a service provider</h1>
                            <p>List your services to your customers</p>
                        </div>
                        <div className={styles.rightArrowIcon}>
                            <BsArrowRight className={styles.icon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;