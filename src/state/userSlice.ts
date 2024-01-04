import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";

const initialState: User = {
  fname: "",
  lname: "",
  email: "",
  credits: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, payload: { payload: User }) => {
      state.fname = payload.payload.fname;
      state.lname = payload.payload.lname;
      state.email = payload.payload.email;
      state.credits = payload.payload.credits;
    },
    clearUser: (state) => {
      state.fname = "";
      state.lname = "";
      state.email = "";
      state.credits = 0;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const user = (state: { user: User }) => state.user;
export const userReducer = userSlice.reducer;
