import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "./types";

const initialState: Theme = { currentTheme: "light" };

const theme = createSlice({
  name: "theme",
  initialState: {
    theme: initialState,
  },
  reducers: {
    changeTheme(state, payload: PayloadAction<Theme>) {
      state.theme = payload.payload;
    },
  },
});

export const { changeTheme } = theme.actions;
export default theme.reducer;
