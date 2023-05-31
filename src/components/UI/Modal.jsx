import React from 'react';
import styles from './Modal.module.css';
import { RxCross1 } from 'react-icons/rx';
import { BsArrowRight } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../store/toggleModal';
import { loginActions } from '../../store/login';
import { registerActions } from '../../store/register';
import Form from '../Data/Form';
const Modal = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modal.showModal);
    const showLoginFormCustomer = useSelector(state => state.login.showLoginFormCustomer);
    const showLoginFormProvider = useSelector(state => state.login.showLoginFormProvider);
    const showRegisterPage = useSelector(state => state.register.showRegisterPage);
    const showRegisterFormCustomer = useSelector(state => state.register.showRegisterFormCustomer);
    const showRegisterFormProvider = useSelector(state => state.register.showRegisterFormProvider);

    const closeModalHandler = () => {
        if (showLoginFormCustomer) {
            dispatch(loginActions.customerLogin());
        }
        else if (showLoginFormProvider) {
            dispatch(loginActions.providerLogin());
        }

        else if (showRegisterFormCustomer) {
            dispatch(registerActions.customerRegister());
        }
        else if (showRegisterFormProvider) {
            dispatch(registerActions.providerRegister());
        }
        else {
            dispatch(modalActions.close());
        }

    }

    const showCustomerFormHandler = () => {
        if (showRegisterPage) {
            dispatch(registerActions.customerRegister());
        }
        else {
            dispatch(loginActions.customerLogin());
        }
    }

    const showProviderFormHandler = () => {
        if (showRegisterPage) {
            dispatch(registerActions.providerRegister());
        }
        else {
            dispatch(loginActions.providerLogin());
        }
    }

    return (
        showModal &&
        (
            <div className={styles.container}>
                <div className={styles.mainContainer}>
                    <div className={styles.cancelButton}>
                        <RxCross1 className={styles.icon} onClick={closeModalHandler} />
                    </div>

                    {
                        (showLoginFormCustomer || showLoginFormProvider || showRegisterFormCustomer || showRegisterFormProvider)
                            ?
                            (
                                <Form />
                            )
                            :
                            (
                                <div className={styles.clickConatiner}>
                                    <div className={styles.click}>
                                        <div className={styles.textContainer} onClick={showCustomerFormHandler}>
                                            <h1>{showRegisterPage ? 'Register' : 'Login'} as a customer</h1>
                                            <p>Book/biew bookings</p>
                                        </div>
                                        <div className={styles.rightArrowIcon}>
                                            <BsArrowRight className={styles.icon} />
                                        </div>
                                    </div>
                                    <div className={styles.click} >
                                        <div className={styles.textContainer} onClick={showProviderFormHandler}>
                                            <h1>{showRegisterPage ? 'Register' : 'Login'} as a service provider</h1>
                                            <p>List your services to your customers</p>
                                        </div>
                                        <div className={styles.rightArrowIcon}>
                                            <BsArrowRight className={styles.icon} />
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        )
    )
}

export default Modal;