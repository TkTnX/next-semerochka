import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface initialStateType {
  userInfoDropdown: boolean;
}

const initialState: initialStateType = {
  userInfoDropdown: false,
};

const modalsReducer = createSlice({
  name: "modals",
  initialState,
  reducers: {
    userInfoDropdownChange: (state, action) => {
      state.userInfoDropdown = action.payload;
    },
  },
});

export const openMenuSelector = (state: RootState) =>
  state.modals.userInfoDropdown;

export const { userInfoDropdownChange } = modalsReducer.actions;

export default modalsReducer.reducer;
