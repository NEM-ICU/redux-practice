import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./features/post/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
