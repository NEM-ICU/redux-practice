import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "http://localhost:8000/api/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(USERS_URL)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
});

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    // just fully update the state withou anything
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
