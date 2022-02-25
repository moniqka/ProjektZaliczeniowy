import { createSlice } from '@reduxjs/toolkit';

export const activeProjectSlice = createSlice({
  name: 'ActiveProjectReducer',
  initialState: { activeProject: null },
  reducers: {
    setActiveProject: (state, action) => {
      state.activeProject = action.payload;
    },
    clearActiveProject: (state) => {
      state.activeProject = null;
    },
  },
});

export const { setActiveProject, clearActiveProject } = activeProjectSlice.actions;
export default activeProjectSlice.reducer;
