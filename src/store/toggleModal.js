import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
    showModal: false
}
const modalSlice = createSlice({
    name: 'modal',
    initialState: initialModalState,
    reducers: {
        close(state) {
            state.showModal = false;
        },
        open(state) {
            state.showModal = true;
        }
    }
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;