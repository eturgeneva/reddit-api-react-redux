import { configureStore } from '@reduxjs/toolkit';
import subredditsSliceReducer from './subredditsSlice.js';

export const store = configureStore({
  reducer: {
    subreddits: subredditsSliceReducer
  },
});

// Updates if something changes in store:
store.subscribe(() => {
  const state = JSON.stringify(store.getState().subreddits);
  localStorage.setItem('state', state);
})
