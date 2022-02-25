import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "ModalReducers",
  initialState: { modalType: null, modalProps: {} },
  reducers: {
    openModal: (state, action) => {
      console.log('action', action)
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.props;
    },
    closeModal: (state) => {
      state.modalType = null;
      state.modalProps = {};
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;