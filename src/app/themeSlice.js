import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  toggle: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleState } = themeSlice.actions;

export default themeSlice.reducer;
