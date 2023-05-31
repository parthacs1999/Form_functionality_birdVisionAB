import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
    showLoginFormCustomer: false,
    showLoginFormProvider: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        customerLogin(state) {
            state.showLoginFormCustomer = !state.showLoginFormCustomer;
        },
        providerLogin(state) {
            state.showLoginFormProvider = !state.showLoginFormProvider;
        }
    }
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;