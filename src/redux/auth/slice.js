import {
  userLogin,
  userLogout,
  userRegister,
  userGetCurrent,
} from './operations';
import { createSlice, isAnyOf, isFulfilled } from '@reduxjs/toolkit';

const userInitState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const isLogginedActions = isFulfilled(userLogin, userRegister, userGetCurrent);

const authSlice = createSlice({
  name: 'auth',
  initialState: userInitState,

  extraReducers: buider =>
    buider
      .addCase(userGetCurrent.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(userGetCurrent.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(userLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(isLogginedActions), (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export const userReduser = authSlice.reducer;
