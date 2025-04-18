import { configureStore } from '@reduxjs/toolkit';
import subredditsSliceReducer from './subredditsSlice.js';

export const store = configureStore({
  reducer: {
    subreddits: subredditsSliceReducer
  },
});
