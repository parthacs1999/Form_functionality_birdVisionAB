import React from 'react';
import styles from './Modal.module.css';
import { RxCross1 } from 'react-icons/rx';
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/toggleModal';
const Modal = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modal.showModal);

    const closeModalHandler = () => {
        dispatch(modalActions.close());
    }
    return (
        showModal &&
        (
            <div className={styles.container}>
                <div className={styles.mainContainer}>
                    <div className={styles.cancelButton}>
                        <RxCross1 className={styles.icon} onClick={closeModalHandler} />
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
    )
}

export default Modal;