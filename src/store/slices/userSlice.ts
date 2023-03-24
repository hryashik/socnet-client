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

interface IUserState {
  info: IGetUserResponse | null;
  isLoading: boolean;
}

const initialState: IUserState = {
  info: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserByIdThunk.fulfilled, (state, action) => {
      state.info = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUserByIdThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserByIdThunk.rejected, (state, action) => {
      state.isLoading = false
      throw new Error(action.error.message)
    });
  },
});

export default userSlice.reducer;
