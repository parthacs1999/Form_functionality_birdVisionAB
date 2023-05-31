import { configureStore } from "@reduxjs/toolkit";

import modalReducer from './toggleModal';
import loginReducer from './login';
import registerReducer from './register';

const store = configureStore({
    reducer: {
        modal: modalReducer,
        login: loginReducer,
        register: registerReducer
    }
});

export default store;