import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice/UserSlice.ts';

export const store=configureStore({
  reducer:{
    userSlice:userSlice.reducer
// postSlice:null,
  }
})
