import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Nethsara" },
  { id: "1", name: "Sithum" },
  { id: "2", name: "Jayan" },
  { id: "4", name: "Abheetha" },
  { id: "5", name: "Lasidu" },
  { id: "6", name: "Achala" },
  { id: "7", name: "Geba" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
