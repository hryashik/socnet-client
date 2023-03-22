import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { IGetUserResponse } from '../../api/contracts';

export const getUserThunk = createAsyncThunk('user/defineUser', async () => {
  const response = await api.getUser();
  return response;
});

interface IUserState {
  info: IGetUserResponse | null;
  isAuth: boolean;
  isLoading: boolean
}

const initialState: IUserState = {
  info: null,
  isAuth: false,
  isLoading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.info = action.payload;
      state.isAuth = true;
      state.isLoading = false
    });
    builder.addCase(getUserThunk.pending, (state) => {
      state.isLoading = true
    })
  },
});

export default userSlice.reducer;
