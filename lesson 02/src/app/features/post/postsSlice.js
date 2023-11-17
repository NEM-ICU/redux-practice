import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things about redux",
  },
  {
    id: "2",
    title: "slices",
    content: "The more I say slice, the more i need pizza",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

// post placement
export const selectAllPosts = (state) => state.posts;
export const { addPost } = postSlice.actions;

export default postSlice.reducer;
