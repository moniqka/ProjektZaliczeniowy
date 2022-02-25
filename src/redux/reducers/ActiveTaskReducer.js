import { createSlice } from '@reduxjs/toolkit';

export const activeTaskSlice = createSlice({
  name: 'ActiveTaskReducer',
  initialState: { activeTask: null },
  reducers: {
    setActiveTask: (state, action) => {
      state.activeTask = action.payload;
    },
    clearActiveTask: (state) => {
      state.activeTask = null;
    },
  },
});

export const { setActiveTask, clearActiveTask } = activeTaskSlice.actions;
export default activeTaskSlice.reducer;