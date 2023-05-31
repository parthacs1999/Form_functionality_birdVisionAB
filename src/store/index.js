import { configureStore } from "@reduxjs/toolkit";

import modalReducer from './toggleModal';

const store = configureStore({
    reducer: {
        modal: modalReducer
    }
});

export default store;