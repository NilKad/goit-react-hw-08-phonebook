import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginUser,
  logOut,
  refreshCurrentUser,
  signUpUser,
} from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLogin: false,
  isRefreshing: true,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      })
      .addCase(logOut.fulfilled, state => {
        state.isLogin = false;
        state.token = null;
        state.user = { name: '', email: '' };
      })
      .addCase(refreshCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
        console.log('refreshCurrentUser payload', payload);
        state.user = payload;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(refreshCurrentUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(
          signUpUser.pending,
          loginUser.pending,
          logOut.pending,
          refreshCurrentUser.pending
        ),
        state => { state.error = null; }
      )
      .addMatcher(
        isAnyOf(
          signUpUser.rejected,
          loginUser.rejected,
          logOut.rejected,
          refreshCurrentUser.rejected
        ),
        (state, action) => { state.error = action.error; }
      )
      .addMatcher(
        isAnyOf(
          signUpUser.fulfilled,
          loginUser.fulfilled,
        ),
        (state, action) => {
          state.token = action.payload.token;
          state.isLogin = true;
        }
      ),
});
