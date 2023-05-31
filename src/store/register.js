import { createSlice } from "@reduxjs/toolkit";

const initialRegisterState = {
    showRegisterPage: false,
    showRegisterFormCustomer: false,
    showRegisterFormProvider: false,
}

const registerSlice = createSlice({
    name: 'register',
    initialState: initialRegisterState,
    reducers: {
        customerRegister(state) {
            state.showRegisterFormCustomer = !state.showRegisterFormCustomer;
        },
        providerRegister(state) {
            state.showRegisterFormProvider = !state.showRegisterFormProvider;
        },
        registerPage(state) {
            state.showRegisterPage = !state.showRegisterPage;
        }
    }
})

export const registerActions = registerSlice.actions;
export default registerSlice.reducer;