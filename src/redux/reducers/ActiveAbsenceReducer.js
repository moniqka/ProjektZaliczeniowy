import { createSlice } from '@reduxjs/toolkit';

export const activeAbsenceReducer = createSlice({
  name: 'ActiveAbsenceReducer',
  initialState: { activeAbsence: null },
  reducers: {
    setActiveAbsence: (state, action) => {
      state.activeAbsence = action.payload;
    },
    clearActiveAbsence: (state) => {
      state.activeAbsence = null;
    },
  },
});

export const { setActiveAbsence, clearActiveAbsence } = activeAbsenceReducer.actions;
export default activeAbsenceReducer.reducer;