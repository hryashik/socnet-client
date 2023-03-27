import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { IGetUserResponse } from '../../api/contracts';

export const getUserByIdThunk = createAsyncThunk(
  'user/getUserById',
  async (id: string) => {
    const response = await api.getUserById(id);
    return response;
  }
);

interface IProfileState {
  info: IGetUserResponse | null;
  isReady: boolean;
}

const initialState: IProfileState = {
  info: null,
  isReady: false,
};

const profileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserByIdThunk.fulfilled, (state, action) => {
      state.info = action.payload;
      state.isReady = true;
    });
    builder.addCase(getUserByIdThunk.pending, (state, action) => {
      state.isReady = false;
    });
    builder.addCase(getUserByIdThunk.rejected, (state, action) => {
      state.isReady = false
      throw new Error(action.error.message)
    });
  },
});

export default profileSlice.reducer;
