import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../api/api';
import { IGetUserResponse } from '../../api/contracts';

export const checkAuthThunk= createAsyncThunk('app/checkAuth', async () => {
  const response = await api.getUser();
  return response;
});

interface IAppState {
  appIsReady: boolean;
  infoAboutMe: IGetUserResponse | null,
  isAuth: boolean
}

const initialState: IAppState = {
  appIsReady: false,
  infoAboutMe: null,
  isAuth: false
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleReady(state, action: PayloadAction<boolean>) {
      state.appIsReady = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthThunk.fulfilled, (state, action) => {
      state.infoAboutMe = action.payload
      state.isAuth = true
      state.appIsReady = true
    })
    builder.addCase(checkAuthThunk.rejected, (state, action) => {
      state.isAuth = false
      state.appIsReady = true
    })
  }
});

export const { toggleReady } = appSlice.actions;
export default appSlice.reducer;
