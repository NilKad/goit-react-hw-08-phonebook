import axios from 'axios';
const { createAsyncThunk } = require('@reduxjs/toolkit');

// const { axios } = require('axios');

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUpUser = createAsyncThunk(
  '/auth/signUpUser',
  async (user, { rejectWithValue }) => {
    console.log('/auth/signUpUser');
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log('error: ', error);
      return rejectWithValue(error.response.data);
    }
  }
);

const loginUser = createAsyncThunk(
  '/auth/login',
  // async (user, { rejectWithValue }) => {
  async (user, action) => {
    console.log('action: ', action);
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      console.log('ok login');
      return data;
    } catch (error) {
      // console.log('error: ', error);
      // console.log(
      //   'authOperation catch error error.response.data: ',
      //   error.response.data
      // );
      // return action.rejectWithValue(error.response);
      return action.rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unSet();
  } catch (error) {
    return error;
  }
});

const refreshCurrentUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    console.log('thunkAPI: ', thunkAPI);
    console.log('refreshCurrentUser');
    const state = thunkAPI.getState();
    console.log('refreshCurrentUser state: ', state);
    const persistToken = state.authUser.token;
    console.log('persistToken: ', persistToken);
    if (persistToken === null) {
      console.log('токена нет');
      return thunkAPI.rejectWithValue('token not found');
    }
    token.set(persistToken);
    try {
      const { data } = await axios.get('/users/current');
      console.log('data: ', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export { signUpUser, loginUser, logOut, refreshCurrentUser };
