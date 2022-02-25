import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "LanguageReducer",
  initialState: { lang: 'pl' },
  reducers: {
    setLanguage: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;